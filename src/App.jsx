import './App.css'
import {useState,useEffect} from 'react'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import ParentSpeak from './components/ParentSpeak'
import Infrastructure from './components/Infrastructure'
import Collaboration from './components/Collaboration'
import Welcome from './components/Welcome'
import Happenings from './components/Happenings'
import Main from './components/Main'
import Totop from './components/Totop'
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <Topbar isScrolled={isScrolled}/>
    <Main/>
    <Welcome/>
    <Happenings/>
    <Collaboration/>
    <Infrastructure/>
    <ParentSpeak/>
    <Footer/>
    <Totop isScrolled={isScrolled}/>
    </>

  );
}

export default App
