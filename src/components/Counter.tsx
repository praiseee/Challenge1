import { useEffect, useState } from "react";

export default function Counter() {
  const [number, changeNumber] = useState(0); // starts at 0

  useEffect(() => {
    const interval = setInterval(() => {changeNumber((oldNumber) => (oldNumber + 1) % 100); }, 1000); //total div by 100 = 0, keeping it 0-99
    return () => clearInterval(interval); }, []);
    
    const tens = Math.floor(number/10); // divides the current number by 10, rounds down to nearest integer
    const ones = number % 10;
    const digits = Array.from({ length: 10 }, (_, i) => i); // Array Created

  return (
    <div className="numbers flex items-center justify-center gap-5 font-bold text-5xl">

      {/* Static digits */}
      <div className="flex flex-col items-center justify-center pb-50"><div>1</div></div>
      <div className="flex flex-col items-center justify-center pb-50"><div>0</div></div>

      {/* Tens digit */}
      <DigitColumn digit={tens} digits={digits} /> 

      {/* Ones digit */}
      <DigitColumn digit={ones} digits={digits} />
    </div>
  );
}

function DigitColumn({ digit, digits }: { digit: number; digits: number[] }) {

  return (
    <div className="flex flex-col items-center justify-start pb-50 overflow-hidden h-65">
      <div
        className="transition-transform duration-500"
        style={{ transform: `translateY(-${digit * 4}rem)` }}>{digits.map((d) => ( //Input 0,1,2,3..

        // stacked vertically
        <div
        key={d} className="h-16 flex items-center justify-center">{d} 
        </div>

        ))}
      </div>
    </div>
  );
}
