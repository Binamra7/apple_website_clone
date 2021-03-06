import "./App.css";
import Hero from "./components/Hero";
import Iphone13 from "./components/Iphone13";
import NextIphone from "./components/NextIphone";
import Navbar from "./components/Navbar";
import NavOffer from "./components/NavOffer";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavOffer />
      <Hero />
      <Iphone13 />
      <NextIphone />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
