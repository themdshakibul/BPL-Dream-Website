import "./App.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";

const fetchPlayer = async () => {
  const res = await fetch("")
};

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
