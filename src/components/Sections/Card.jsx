import userProfile from "../../assets/userProfile.png";
import flagImage from "../../assets/Flag.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ Player, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handelChoosePlayer = () => {
    let newCoion = coin - Player.price;

    if (newCoion >= 0) {
      setCoin(coin - Player.price);
    } else {
      toast.error("Not enough coion to purches this Player!");
      return;
    }
    toast.success(`${Player.playerName} Is selected`);
    setIsSelected(true);
    setSelectedPlayer([...selectedPlayer, Player]);
  };

  return (
    <>
      <div>
        <div className="card bg-base-100 md:w-86 lg:w-full shadow-2xl p-5 card-border">
          <figure>
            <img
              src={Player.playerImage}
              alt="Shoes"
              className="rounded-2xl h-90 md:h-70 w-full object-cover object-top"
            />
          </figure>
          <div className="space-y-4 mt-4">
            <div className="card-title">
              <img src={userProfile} alt="User Profile" className="w-6" />
              <h2>{Player.playerName}</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="flex gap-2 items-center">
                <img src={flagImage} alt="Flag" className="h-4" />
                <span>{Player.playerCountry}</span>
              </h2>
              <button className="btn">{Player.playerRole}</button>
            </div>
            <hr className="text-gray-400" />
            <div className="flex justify-between items-center card-title">
              <h3>Rating</h3>
              <span>{Player.rating}</span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <span>{Player.bowlingStyle}</span>
              <span>{Player.battingStyle}</span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <h3>
                Price: <span>${Player.price}</span>
              </h3>
              <button
                disabled={isSelected}
                onClick={handelChoosePlayer}
                className="btn"
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
