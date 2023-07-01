import './App.css'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import ParentSpeak from './components/ParentSpeak'
import Infrastructure from './components/Infrastructure'
import Collaboration from './components/Collaboration'
import Welcome from './components/Welcome'
import Happenings from './components/Happenings'
import Main from './components/Main'
function App() {
 
  return (
    <>
    <Topbar/>
    <Main/>
    <Welcome/>
    <Happenings/>
    <Collaboration/>
    <Infrastructure/>
    <ParentSpeak/>
    <Footer/>
    </>

  );
}

export default App
