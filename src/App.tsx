import './App.css';
import NavBar from './NavBar.tsx';
import Button from './Button.tsx';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      
      {/* Main Texts */}
      <main className="flex flex-col items-center justify-center text-center pt-40 ">
        <h1 className="text-6xl font-bold mb-4">AI Solutions tailored to your <br/> business needs</h1>
        <p className="text-lg font-light py-4 pb-">Create automations effortlessly! Choose from a vast library of templates or craft your own using our <br/> powerful visual editor.</p>
      </main>
      
      <div className="flex items-center justify-center py-10 gap-5">
        <Button href="/login">Start Trial</Button>
        <Button href="/login">Tutorial</Button>
      </div>

      {/* Trusted Companies */}
      <section>
        <p className="items-center justify-center text-center text-lg font-bold">Trusted By 40+ Businesses</p>
        <div>

        </div>
      </section>

    </div>

    

  );
}

export default App;

