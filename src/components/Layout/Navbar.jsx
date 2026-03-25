import navLogo from "../../assets/logo.png";
import dolarImage from "../../assets/dollar.png";
import bannerImage from "../../assets/banner-main.png";

import { ToastContainer } from "react-toastify/unstyled";
import confetti from "canvas-confetti";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = ({ coin, setCoin }) => {
  const [claimed, setClaimed] = useState(false);

  const handelclickFreeCreadit = () => {
    if (claimed) {
      toast.error("You have already claimed free credit!");
      return;
    }

    setCoin(coin + 10000);
    setClaimed(true);

    toast.success("🎉 Free Credit Added!");

    confetti({ particleCount: 200, spread: 90, origin: { x: 0 } });
    confetti({ particleCount: 200, spread: 90, origin: { x: 1 } });
  };
  return (
    <>
      <div>
        <div className="container mx-auto px-2">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Fixture</a>
                  </li>
                  <li>
                    <a href="#">Teams</a>
                  </li>
                  <li>
                    <a href="#">Schedules</a>
                  </li>
                </ul>
              </div>

              <img src={navLogo} alt="" className="w-15" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Fixture</a>
                </li>
                <li>
                  <a href="#">Teams</a>
                </li>
                <li>
                  <a href="#">Schedules</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">
                <span>{coin}</span>
                <span>Coin</span>
                <img src={dolarImage} alt="Dolar" />
              </a>
            </div>
          </div>
          {/* navbar bg image */}
          <div className="bg-[url('/src/assets/bg-shadow.png')] h-150 bg-no-repeat bg-cover rounded-2xl bg-[#131313] text-white">
            <div className="flex flex-col h-140 items-center justify-center text-center space-y-5">
              <img src={bannerImage} alt="Banner Main" />
              <h2 className="text-[40px] font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h2>
              <p>Beyond Boundaries Beyond Limits</p>

              <button
                onClick={handelclickFreeCreadit}
                class="bg-linear-to-b from-lime-300 to-lime-400 text-neutral-900 font-semibold tracking-tight text-lg py-3 px-8 rounded-2xl border-4 border-neutral-900 outline-2 outline-lime-300 shadow-inner transition-transform active:scale-95"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default Navbar;
