import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main>
        <FeatureGrid />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
