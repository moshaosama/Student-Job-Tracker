import { MdDarkMode } from "react-icons/md";
import { container } from "../Style";
import useTheme from "../Hooks/useTheme";
import { Link } from "react-router";
import AddJopForm from "./AddJopForm";
import useAddForm from "../Hooks/useAddForm";

const Header = () => {
  const { handleChangeTheme } = useTheme();
  const { pathname } = window.location;
  const { AddFromState, handleClick } = useAddForm();
  return (
    <div className={container}>
      <div>
        <Link to={"/"}>
          <h1 className="font-bold text-2xl">
            Job<span className="text-red-500">Log</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-5 font-semibold">
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
  );
};

export default Header;
