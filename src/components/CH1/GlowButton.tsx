import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const calculatePathTiming = (pathPoints: number[][]) => {
  const distances = [];
  for (let i = 0; i < pathPoints.length - 1; i++) {
    const [x1, y1] = pathPoints[i];
    const [x2, y2] = pathPoints[i + 1];
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    distances.push(distance);
  }
  
  const totalDistance = distances.reduce((sum, dist) => sum + dist, 0);
  const times = [0];
  let cumulativeTime = 0;
  
  for (const distance of distances) {
    cumulativeTime += distance / totalDistance;
    times.push(cumulativeTime);
  }
  
  // Ensure the last time is exactly 1
  times[times.length - 1] = 1;
  
  return times;
};

const generatePathPoints = (width: number, height: number, padding: number = 5) => {
  const points = [];
  const centerY = height / 2; // Center of the button (where the label is)
  const startY = centerY - 10; // 10px above the center
  
  // Calculate proportional steps based on edge lengths
  const topBottomLength = width - 2 * padding;
  const leftRightLength = height - 2 * padding;
  const leftEdgeLength = height - padding - startY;
  
  // Use more points for longer edges
  const topBottomSteps = Math.max(16, Math.floor(topBottomLength / 10));
  const rightSteps = Math.max(8, Math.floor(leftRightLength / 10));
  const bottomSteps = topBottomSteps; // Same as top
  const leftSteps = Math.max(6, Math.floor(leftEdgeLength / 10));
  
  // Top edge
  for (let i = 0; i <= topBottomSteps; i++) {
    const x = padding + (width - 2 * padding) * (i / topBottomSteps);
    points.push([x, padding]);
  }
  
  // Right edge
  for (let i = 1; i <= rightSteps; i++) {
    const y = padding + (height - 2 * padding) * (i / rightSteps);
    points.push([width - padding, y]);
  }
  
  // Bottom edge - more points for better density
  for (let i = 1; i <= bottomSteps; i++) {
    const x = width - padding - (width - 2 * padding) * (i / bottomSteps);
    points.push([x, height - padding]);
  }
  
  // Left edge - distribute points evenly but stop at startY
  for (let i = 1; i <= leftSteps; i++) {
    const y = height - padding - (leftEdgeLength) * (i / leftSteps);
    points.push([padding, y]);
  }
  
  // Add the starting point just above the label
  points.push([padding, startY]);
  
  return points;
};

export default function GlowButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [pathPoints, setPathPoints] = useState<number[][]>([]);
  const [timing, setTiming] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const circleControls = useAnimation();

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const points = generatePathPoints(width, height);
      const calculatedTiming = calculatePathTiming(points);
      
      setPathPoints(points);
      setTiming(calculatedTiming);
    }
  }, []);

  // Control animation based on path points and hover state
  useEffect(() => {
    if (pathPoints.length > 0 && timing.length > 0) {
      if (!isHovered) {
        circleControls.start({
          cx: pathPoints.map(point => point[0]),
          cy: pathPoints.map(point => point[1]),
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            times: timing
          }
        });
      } else {
        circleControls.stop();
      }
    }
  }, [pathPoints, timing, isHovered, circleControls]);

  return (
    <div className="flex items-center justify-center w-full py-60">
      <a href={href}>
        <div 
          ref={buttonRef}
          className="relative justify-center items center h-fit w-fit rounded-full p-px overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${buttonRef.current?.offsetWidth || 200} ${buttonRef.current?.offsetHeight || 60}`}>
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="70%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {pathPoints.length > 0 && (
              <>
                {/* Full area fill on hover */}
                <motion.rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="#8b5cf6"
                  animate={{ 
                    opacity: isHovered ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  filter="url(#glowFilter)"
                />
                
                {/* Moving circle - stops and hides on hover */}
                <motion.circle
                  cx={pathPoints[0][0]}
                  cy={pathPoints[0][1]}
                  r="20"
                  fill="url(#glow)"
                  filter="url(#glowFilter)"
                  animate={circleControls}
                  style={{
                    opacity: isHovered ? 0 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="group-hover:opacity-0"
                />
              </>
            )}
          </svg>
          <div className="relative z-10 py-2 px-10 justify-center items center bg-black h-fit w-fit rounded-full">
            {children}
          </div>
        </div>
      </a>
    </div>
  );
}
