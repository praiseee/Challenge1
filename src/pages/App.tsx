import '../App.css';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import ImageRow from '../components/ImageRow';
import ServSec from '../components/Services';
import { motion } from "framer-motion";
import HoverBtn from '../components/hoverBtn';
import Counter from '../components/Counter';
import AgentWindow from '../components/AgentWindow.tsx';
import AccordionComp from "../components/AccordionComp";
import InfoBoxes from "../components/InfoBoxes";
import GlowButton from "../components/GlowButton";
import SlantImageRow from '../components/SlantImageRow';

function App() {
  return (
    <div className="app-page min-h-screen">

      {/* Navbar */}
      <NavBar />

      {/* Main Texts */}
      <main className="flex flex-col items-center justify-center text-center pt-60 px-4">
        
        <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 1, y: -40 }} //Defines the starting state
        animate={{ opacity: 1, y: 0 }} //Defines the final state
        transition={{ duration: 0.8 }} //Controls how the animation plays (speed, easing, delay..)
        >
          AI Solutions tailored to your <br /> business needs
        </motion.h1>

        <motion.p 
        className="text-lg font-light py-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        >
          Create automations effortlessly! Choose from a vast library of templates or craft your own using our <br /> powerful visual editor.
        </motion.p>

      </main>

      {/* Main Buttons */}
      <div className="flex items-center justify-center py-8 gap-5">
        <Button
          href="/startTrial"
          style={{ backgroundColor: "#653865", color: "#FFFFFF", borderColor: "#653865" }}
          icon="images/skip-forward.png"
          hoverEffect={true}
          >Start Trial
        </Button>

        <Button
          href="/tutorial"
          style={{ backgroundColor: "#000000ff", color: "#ffffffff", borderColor: "#ffffffff" }}
          icon="images/loader.png"
          hoverEffect={true}
          >Tutorial
        </Button>
      </div>

      {/* Company Logos */}
      <section className="py-16">
        <p className="text-center text-lg font-bold mb-8">Trusted By 40+ Businesses</p>
        
        <ImageRow images={images} />
      </section>

      {/* Our Services */}
      <section className="text-center py-16 px-4">
        <motion.h2 className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        >Our Services
        </motion.h2>
        
        <ServSec
          image="images/bg.png"
          alt="Efficiency and Improvement"
          title="Efficiency and Improvement"
          borderColor="#653865"
          glow="#653865"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra convallis vulputate. 
          Aenean tempor blandit sodales. Maecenas vitae sem quam. Maecenas pulvinar risus sodales lectus luctus interdum. 
          Aliquam erat volutpat. Praesent aliquam elit tempus augue accumsan, quis bibendum nunc pretium. 
          Nunc et metus congue odio malesuada iaculis."
        />

        <ServSec
          image="images/bg.png"
          alt="Efficiency and Improvement"
          title="Efficiency and Improvement"
          borderColor="#385065"
          glow="#385065"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra convallis vulputate. 
          Aenean tempor blandit sodales. Maecenas vitae sem quam. Maecenas pulvinar risus sodales lectus luctus interdum. 
          Aliquam erat volutpat. Praesent aliquam elit tempus augue accumsan, quis bibendum nunc pretium. 
          Nunc et metus congue odio malesuada iaculis."
          reverse 
          
        />
      </section>
      
      <HoverBtn />

      <Counter />

      {/* Agent Canvas */}
      <section className="grid grid-cols-1 xl:grid-cols-3 xl:gap-20 items-start justify-center py-16 max-w-7xl mx-auto w-full px-4 xl:px-10">
        {/* Left Content */}
        <div className="flex flex-col max-w-full w-full col-span-1 max-xl:px-10">
          
          <div className="flex items-center gap-5 lg:pt-30 pb-4">
            <img src="images/logoWhite.png" alt="Logo" className="w-8 h-8"/>
            <p className="font-semibold text-2xl lg:text-3xl">Agent Canvas</p>
          </div>

          <p className="text-base pb-8">
            Agent Canvas is a low-code environment that lets you build, test, 
            and deploy custom voice agents fast. 
          </p>

          {/* Accordion */}
          <AccordionComp />

        </div>

        {/* Right Content */}
        <div className="relative w-full flex-shrink-0 col-span-2 flex flex-col items-center justify-center h-full">
          <img 
            src="images/mountains.png" 
            alt="Agent Canvas illustration"
            className="w-full h-full z-0 absolute top-0 left-0 object-cover"
          />

          {/* Agent Window (always on image) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center max-md:py-8 py-20 px-8">
            <AgentWindow />
          </div>

          {/* Info Boxes (always on image, always row) */}
          <InfoBoxes />
        </div>
      </section>

      {/* Glow Button */}
      <GlowButton>Glow</GlowButton>

      <SlantImageRow images={slantimages} />
      
    </div>
  );
}

const images = [
  "images/l1.png",
  "images/l2.png",
  "images/l3.png",
  "images/l4.png",
  "images/l5.png",
  "images/l1.png",
  "images/l2.png",
  "images/l3.png",
  "images/l4.png",
  "images/l5.png",
];

const slantimages = [
  "images/s1.png",
  "images/s2.png",
  "images/s3.png",
  "images/s4.png",
  "images/s5.png",
  "images/s6.png",
];

export default App;
