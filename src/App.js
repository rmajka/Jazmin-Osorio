import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobleNavbar from "./components/mobileNavbar/MobleNavbar";
import Home from "./pages/home/Home";
import SobreMi from "./pages/sobreMi/SobreMi";
import Articulos from "./pages/articulos/Articulos";
import Contacto from "./pages/contacto/Contacto";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <MobleNavbar />
      <Navbar />
      <div className="main">
        <Home />
        <SobreMi />
        <Articulos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
