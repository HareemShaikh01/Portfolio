import { useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Exprience from "./components/Exprience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap"
import { HashLink } from "react-router-hash-link"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600, 
    });

    
  }, []);
  
  return (
    <div className="w-full overflow-x-hidden">
    <div>
      <div className="gradient w-64 h-64 fixed top-0 left-0 z-[-1] rounded-br-full"></div>
      <div className="gradient w-52 h-52 fixed bottom-0 right-0 z-[-1] rounded-tl-full "></div>
    </div>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Exprience/>
    <Services/>
    <Contact/>

    <HashLink to="#" smooth>
    <i className="dance fa-solid fa-angles-down fixed bottom-6 right-6 text-white text-2xl rotate-180"></i> 
      </HashLink>      
    </div>
  )
}

export default App
