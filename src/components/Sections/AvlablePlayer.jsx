import React, { use, useState } from "react";

import Card from "./Card";
import SelectedPlayer from "./SelectedPlayer";

const AvlablePlayer = ({ PlayerPromis, setCoin, coin }) => {
  const playerData = use(PlayerPromis);

  const [selected, setselected] = useState("Available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between pt-20">
          {selected === "Available" ? (
            <h2 className="text-3xl font-bold">Available Players</h2>
          ) : (
            <h2 className="text-3xl font-bold">
              Selected Player ({selectedPlayer.length}/{playerData.length})
            </h2>
          )}
          <div>
            <button
              onClick={() => {
                setselected("Available");
              }}
              className={`btn btn-xl ${selected === "Available" ? "bg-[#e2f828]" : ""} rounded-r-none rounded-l-xl`}
            >
              Available
            </button>
            <button
              onClick={() => {
                setselected("Selected");
              }}
              className={`btn btn-xl ${selected === "Selected" ? "bg-[#e2f828]" : ""} rounded-l-none rounded-r-xl`}
            >
              Selected ({selectedPlayer.length})
            </button>
          </div>
        </div>
        {selected === "Available" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {playerData.map((Player) => {
              return (
                <Card
                  key={Player.playerName}
                  Player={Player}
                  setCoin={setCoin}
                  coin={coin}
                  selectedPlayer={selectedPlayer}
                  setSelectedPlayer={setSelectedPlayer}
                />
              );
            })}
          </div>
        ) : (
          <SelectedPlayer
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            setCoin={setCoin}
            coin={coin}
          />
        )}
      </div>
    </>
  );
};

export default AvlablePlayer;
