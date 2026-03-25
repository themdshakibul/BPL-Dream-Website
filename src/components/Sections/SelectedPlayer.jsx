import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}) => {
  const handelClickSelectedPlayer = (player) => {
    const fileterPlayers = selectedPlayer.filter(
      (selected) => selected.playerName !== player.playerName,
    );
    setSelectedPlayer(fileterPlayers);
    setCoin(coin + player.price);
  };
  return (
    <>
      <div>
        <div>
          {selectedPlayer.map((player, ind) => {
            return (
              <div key={ind}>
                <div className="flex items-center justify-between mt-10 mb-5 rounded-2xl border-2 p-10 ">
                  <div className="flex items-center gap-10">
                    <img
                      src={player.playerImage}
                      alt=""
                      className="w-60 h-50 rounded-2xl object-cover object-top"
                    />
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold flex items-center gap-2">
                        <FaUser />
                        {player.playerName}
                      </h2>
                      <p className="text-xl font-semibold">
                        {player.playerRole}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn p-5 rounded-xl text-red-500"
                    onClick={() => handelClickSelectedPlayer(player)}
                  >
                    <MdDelete size={30} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectedPlayer;
