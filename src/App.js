import "./App.css";
import { useState, useRef, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import MobleNavbar from "./components/mobileNavbar/MobleNavbar";
import Home from "./pages/home/Home";
import SobreMi from "./pages/sobreMi/SobreMi";
import Articulos from "./pages/articulos/Articulos";
import Contacto from "./pages/contacto/Contacto";
import Footer from "./pages/footer/Footer";

function App() {
  //use the position of every link to make it active and chage border bottom
  const [position, setPosition] = useState(0);

  const divRef = useRef(null);
  const handleScroll = () => {
    const divPosition = divRef.current.getBoundingClientRect();
    setPosition(divPosition.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <MobleNavbar position={position} />
      <Navbar position={position} />
      <div className="main">
        <Home divRef={divRef} />
        <SobreMi />
        <Articulos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
