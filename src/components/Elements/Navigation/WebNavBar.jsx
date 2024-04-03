import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navBarData from "../../../data/navigationData/NavBarData";
import ClimaxGreenLogo from "../../../assets/media/logos/climax.png";
import HambuggerMenu from '../../../assets/media/icons/hamburger menu.png'
import Cross from '../../../assets/media/icons/cross.png'


const WebNavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={` fixed w-full z-50 flex flex-row items-center justify-between bg-brandWhite1x font-remRegular px-5 py-2 md:px-10 md:py-1 shadow-xl`}
      >
        <aside className={`flex items-center justify-start w-18 lg:w-fit`}>
          <img
            src={ClimaxGreenLogo}
            alt={`Logo of Climax green Agriculture`}
            className={`w-10 md:w-16`}
          />
        </aside>
        <nav className={`flex items-center`}>
          <ul
            className={`flex ${
              isOpen
                ? `block w-full h-dvh  bg-brandLightGreen4x  flex-col gap-10 items-start justify-start absolute right-0 px-10 py-20 top-14 z-50 overscroll-y-none text-3xl	 `
                : `hidden md:flex`
            }`}
          >
            {navBarData.map((item, idx) => {
              return (
                <motion.li
                  key={idx}
                  className={`flex items-center gap-3 px-5 text-brandGreen2x transition duration-700 ease-in-out hover:border-b-2 hover:border-b-brandGreen1x`}
                >
                  <NavLink
                    end={item.end}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? `border-b-2 border-b-brandGreen1x` : ``
                    }
                  >
                    {item.pageName}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
          <div className={`flex items-center justify-center gap-5`}>
            <NavLink to="">
              <button type="button" className={`bg-brandGreen1x px-4 py-1 rounded shadow-2xl text-brandWhite1x`}>Register</button>
            </NavLink>
            <button
              type="button"
              className={`md:hidden`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <img src={Cross} alt="" />
              ) : (
                <img src={HambuggerMenu} alt="" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default WebNavBar;
