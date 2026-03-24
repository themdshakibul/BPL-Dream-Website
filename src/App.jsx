import { Suspense, useState } from "react";
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

  const [coin, setCoin] = useState(500000);
  return (
    <>
      <div>
        <Navbar coin={coin} />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-150 text-center">
              <span className="loading loading-dots loading-xl "></span>
            </div>
          }
        >
          <AvlablePlayer
            PlayerPromis={PlayerPromis}
            setCoin={setCoin}
            coin={coin}
          />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
