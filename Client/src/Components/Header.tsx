import { MdDarkMode } from "react-icons/md";
import { container } from "../Style";
import useTheme from "../Hooks/useTheme";

const Header = () => {
  const { handleChangeTheme } = useTheme();
  return (
    <div className={container}>
      <div>
        <h1 className="font-bold text-2xl">
          Job<span className="text-red-500">Log</span>
        </h1>
      </div>
      <div className="flex items-center gap-5 font-semibold">
        <a href="#">Home</a>
        <a href="#">Jops</a>
        <i onClick={handleChangeTheme}>
          <MdDarkMode className="text-xl cursor-pointer" />
        </i>

        {/* Image Place */}
        <div className="w-11 h-11 rounded-full bg-[#ddd] mx-10"></div>
      </div>
    </div>
  );
};

export default Header;
