import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Community from "./sections/Community";
import Footer from "./components/Footer";
import About from "./sections/About";
import Partners from "./sections/Partners";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";

export default function App() {

  useEffect(() => {
    const preventContext = e => e.preventDefault(); // block right-click
    document.addEventListener("contextmenu", preventContext);

    return () => document.removeEventListener("contextmenu", preventContext);
  }, []);

  return (
    <div className="site">
      <Navbar/>
      <Hero/>
      <Community/>
      <Gallery/>
      <Partners/>
      <About/>
      <Footer/>
    </div>
  );
}