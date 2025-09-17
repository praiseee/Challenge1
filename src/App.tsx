import './App.css';
import NavBar from './NavBar.tsx';
import Button from './Button.tsx';
import ImageRow from './ImageRow.tsx';
import Services from './services.tsx';

function App() {
  return (
    <div className="min-h-screen"> {/* no need for bg-black or text-white now */}

      <NavBar />

      {/* Main Texts */}
      <main className="flex flex-col items-center justify-center text-center pt-35">
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
          icon="images/skip-forward.png"
        >
          Start Trial
        </Button>

        <Button
          href="/tutorial"
          style={{ backgroundColor: "#385065", color: "#FFF", borderColor: "#385065" }}
          icon="images/loader.png"
        >
          Tutorial
        </Button>
      </div>

      {/* Company Logos */}
      <section>
        <p className="text-center text-l font-bold pt-16">Trusted By 40+ Businesses</p>
        <ImageRow images={images} />
      </section>

      {/* Our Services */}
      <div>
        <h2 className="flex flex-col items-center justify-center text-center text-4xl font-bold py-18">
          Our Services

          <Services/>
        </h2>
      </div>

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
