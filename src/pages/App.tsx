import '../App.css';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import ImageRow from '../components/ImageRow';
import ServSec from '../components/Services';
import { motion } from "framer-motion";
import HoverBtn from '../components/hoverBtn';
import Counter from '../components/Counter';
import AgentWindow from '../components/AgentWindow.tsx';
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "../components/accordion"

function App() {
  return (
    <div className="min-h-screen">

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

      <section className="flex flex-col lg:flex-row items-start justify-center px-6 lg:px-10 py-16 lg">
        {/* Left Content */}
        <div className="flex flex-col max-w-full lg:max-w-md">
          
          <div className="flex items-center gap-5 lg:pt-30 pb-4">
            <img src="images/logoWhite.png" alt="Logo" className="w-8 h-8"/>
            <p className="font-semibold text-2xl lg:text-3xl">Agent Canvas</p>
          </div>

          <p className="text-base pb-8">
            Agent Canvas is a low-code environment that lets you build, test, 
            and deploy custom voice agents fast. 
          </p>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-2 pb-16 lg:pb-40">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center gap-2 text-base group">
                <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">
                  01
                </span>
                <span className="text-white">Create the Agent</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Choose an agent type and upload documents so your agent understands your brand, policies, and workflows.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center gap-2 text-base group">
                <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">
                  02
                </span>
                <span className="text-white">Define policies</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Set rules and guardrails in plain language. Specify what’s allowed, what’s restricted, and how the agent should handle different scenarios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center gap-2 text-base group">
                <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">
                  03
                </span>
                <span className="text-white">Write the flow</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Author the conversation logic in text. Define turns, conditions, fallbacks, and escalations. Add functions, API calls, and custom code when needed. 
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center gap-2 text-base group">
                <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">
                  04
                </span>
                <span className="text-white">Test and Launch</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Run test calls in real time, debug, and redeploy in seconds. Validate changes with traffic-split A/B experiments. Track versions and roll back safely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center gap-2 text-base group">
                <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">
                  05
                </span>
                <span className="text-white">Monitor and improve</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Replay calls, review outcomes, and turn real conversations into test suites. Use experiments to confirm improvements before release.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right Content */}
        <div className="relative w-full lg:w-[950px] mt-10 lg:mt-0 lg:ml-20 flex-shrink-0">
          <img 
            src="images/mountains.png" 
            alt="Agent Canvas illustration"
            className="w-full h-auto"
          />

          {/* Agent Window (always on image) */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 max-w-[250px]">
            <AgentWindow />
          </div>

          {/* Info Boxes (always on image, always row) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:top-[70%] lg:left-[5%] lg:translate-x-0 w-full max-w-[90%]">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:top-[70%] lg:left-[5%] lg:translate-x-0 w-full max-w-[90%]">
              <div className="flex flex-row gap-4 lg:gap-20 text-sm flex-wrap justify-center">
                
                <div className="flex-1 min-w-[120px]">
                  <div className="flex gap-2 py-2">
                    <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
                    <p className="font-bold">Training Data</p>
                  </div>
                  <p className="text-gray-400">Provide docs and policies for accuracy.</p>
                </div>

                <div className="flex-1 min-w-[120px]">
                  <div className="flex gap-2 py-2">
                    <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
                    <p className="font-bold">Training Data</p>
                  </div>
                  <p className="text-gray-400">Files handled with enterprise-grade security.</p>
                </div>

                <div className="flex-1 min-w-[120px]">
                  <div className="flex gap-2 py-2">
                    <img src="images/logoWhite.png" alt="Logo" className="w-5 h-5"/>
                    <p className="font-bold">Training Data</p>
                  </div>
                  <p className="text-gray-400">Upload PDFs, CSVs, or text files with ease.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
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

export default App;
