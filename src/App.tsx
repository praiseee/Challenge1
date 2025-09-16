import './App.css';
import NavBar from './NavBar.tsx';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      
      {/* Main Texts */}
      <main className="flex flex-col items-center justify-center text-center py-40 ">
        <h1 className="text-6xl font-bold mb-4">AI Solutions tailored to your <br/> business needs</h1>
        <p className="text-lg font-light py-4">Create automations effortlessly! Choose from a vast library of templates or craft your own using our <br/> powerful visual editor.</p>
      </main>

    </div>
  );
}

export default App;

