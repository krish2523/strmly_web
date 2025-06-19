import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full h-14 bg-black bg-opacity-80 text-white flex justify-around items-center z-50 md:hidden">
      <div className="flex flex-col items-center text-xs">
        <AiFillHome className="text-xl" />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center text-xs">
        <MdOutlineVideoLibrary className="text-xl" />
        <span>Shorts</span>
      </div>
      <div className="flex flex-col items-center text-xs">
        <IoIosAddCircle className="text-2xl text-pink-500" />
        <span>Add</span>
      </div>
      <div className="flex flex-col items-center text-xs">
        <AiOutlineSearch className="text-xl" />
        <span>Search</span>
      </div>
      <div className="flex flex-col items-center text-xs">
        <CgProfile className="text-xl" />
        <span>Profile</span>
      </div>
    </div>
  );
}
