import "./App.css";
import About from "./components/layouts/about/About";
import Banner from "./components/layouts/banner/Banner";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Highlights from "./components/layouts/highlights/Highlights";
import Register from "./components/layouts/register/Register";
import Session from "./components/layouts/session/Session";
import Who from "./components/layouts/who/Who";
import Why from "./components/layouts/why/Why";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Highlights />
      <Who />
      <Session />
      <Why />
      <Register />
      <Footer />
    </>
  );
}

export default App;
