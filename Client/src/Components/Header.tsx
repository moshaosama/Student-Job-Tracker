import { MdDarkMode } from "react-icons/md";
import { container } from "../Style";
import useTheme from "../Hooks/useTheme";
import { Link, NavLink } from "react-router";
import AddJopForm from "./AddJopForm";
import useAddForm from "../Hooks/useAddForm";
import { FiAlignJustify } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { handleChangeTheme } = useTheme();
  const { pathname } = window.location;
  const { AddFromState, handleClick } = useAddForm();
  const [MenuState, setMenuState] = useState(false);

  const handleClickMenu = () => {
    setMenuState(!MenuState);
  };
  return (
    <>
      <div className={container}>
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-2xl">
              Job<span className="text-red-500">Log</span>
            </h1>
          </Link>
        </div>
        <div className="sm:hidden" onClick={handleClickMenu}>
          <FiAlignJustify className="text-2xl" />
        </div>

        <div className="flex items-center gap-5 font-semibold max-sm:hidden">
          {pathname == "/jops" ? (
            <button
              className="bg-purple-400 w-20 font-semibold cursor-pointer hover:bg-gray-600 transition-all duration-300 rounded-xl"
              onClick={handleClick}
            >
              Add Jop
            </button>
          ) : null}
          <a href="/">Home</a>
          <a href="/jops">Jops</a>

          <i onClick={handleChangeTheme}>
            <MdDarkMode className="text-xl cursor-pointer" />
          </i>

          {/* Image Place */}
          <div className="w-11 h-11 rounded-full bg-[#ddd] mx-10"></div>
        </div>

        {AddFromState ? (
          <div className="w-full bg-[#0000008f] absolute top-0 left-0 h-screen flex justify-center items-center ">
            <AddJopForm setAddForm={handleClick} />
          </div>
        ) : null}
      </div>
      <AnimatePresence>
        {MenuState && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="sm:hidden px-5 py-10 flex flex-col gap-4 bg-white h-screen absolute top-0 right-0 w-full z-50"
            id="Menu"
            onClick={handleClickMenu}
          >
            <div onClick={handleClickMenu}>
              <IoExitOutline className="text-3xl" />
            </div>
            <NavLink to={"/"}>Home</NavLink>
            <hr />
            <NavLink to={"/jops"}>Jops</NavLink>
            <hr />
            <i onClick={handleChangeTheme}>
              <MdDarkMode className="text-xl cursor-pointer" />
            </i>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
