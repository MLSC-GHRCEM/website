import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.jsx";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default App;
