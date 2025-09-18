import './App.css';
import NavBar from './NavBar';
import Button from './Button';
import ImageRow from './ImageRow';
import ServSec from './Services';

function App() {
  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <NavBar />

      {/* Main Texts */}
      <main className="flex flex-col items-center justify-center text-center pt-60 px-4">
        <h1 className="text-6xl font-bold mb-4">
          AI Solutions tailored to your <br /> business needs
        </h1>
        <p className="text-lg font-light py-4">
          Create automations effortlessly! Choose from a vast library of templates or craft your own using our <br /> powerful visual editor.
        </p>
      </main>

      {/* Main Buttons */}
      <div className="flex items-center justify-center py-8 gap-5">
        <Button
          href="/startTrial"
          style={{ backgroundColor: "#653865", color: "#FFFFFF", borderColor: "#653865" }}
          icon="images/skip-forward.png">Start Trial
        </Button>

        <Button
          href="/tutorial"
          style={{ backgroundColor: "#000000ff", color: "#ffffffff", borderColor: "#ffffffff" }}
          icon="images/loader.png">Tutorial
        </Button>
      </div>

      {/* Company Logos */}
      <section className="py-16">
        <p className="text-center text-lg font-bold mb-8">Trusted By 40+ Businesses</p>
        
        <ImageRow images={images} />
      </section>

      {/* Our Services */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        
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
