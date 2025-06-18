import "./App.css";
import About from "./components/layouts/about/About";
import Banner from "./components/layouts/banner/Banner";
import Header from "./components/layouts/header/Header";
import Highlights from "./components/layouts/highlights/Highlights";

function App() {
  return (
    <>
     <Header/>
     <Banner/>
     <About/>
     <Highlights/>
    </>
  );
}

export default App;
