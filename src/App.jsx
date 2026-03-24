import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AvlablePlayer from "./components/Sections/AvlablePlayer";

const fetchPlayer = async () => {
  const res = await fetch("Player.json");
  return res.json();
};

function App() {
  const PlayerPromis = fetchPlayer();
  return (
    <>
      <div>
        <Navbar />
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvlablePlayer PlayerPromis={PlayerPromis} />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
