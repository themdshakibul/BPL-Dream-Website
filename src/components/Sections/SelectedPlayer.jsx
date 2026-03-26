import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
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
    toast.error(`${player.playerName} Deleted`);
  };
  return (
    <>
      <div>
        <div>
          {selectedPlayer.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-3 h-70 border rounded-2xl mt-10">
              <h2 className="text-3xl font-bold">No Players Selected</h2>
              <p className="text-xl font-semibold">
                Go to Avlable tab to select players
              </p>
            </div>
          ) : (
            selectedPlayer.map((player, ind) => {
              return (
                <div key={ind}>
                  <div className="flex flex-col md:flex-row items-center justify-between mt-10 mb-5 rounded-2xl border-2 p-10">
                    <div className="flex flex-col md:flex-row items-center gap-10">
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
                      className="btn mt-5 md:mt-0 p-5 rounded-xl text-red-500"
                      onClick={() => handelClickSelectedPlayer(player)}
                    >
                      <MdDelete size={30} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
          
        </div>
      </div>
    </>
  );
};

export default SelectedPlayer;
