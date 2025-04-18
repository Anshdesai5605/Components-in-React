import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero';
import Skills from './components/skills';
import Footer from './components/footer';
import Exp from './components/experience';

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Hero />      
        <Exp />
        <Skills />
        <Footer />
        </div>
    </>
  );
}

export default App
