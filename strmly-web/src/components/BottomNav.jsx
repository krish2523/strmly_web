import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export default function BottomNav() {
  const handleLogout = () => {
    localStorage.removeItem("userID");
    window.location.reload();
  };

  return (
    <div className="fixed bottom-0 w-full h-16 bg-black bg-opacity-90 text-white flex justify-around items-center z-50 border-t border-gray-700">
      {/* Home */}
      <div className="flex flex-col items-center text-xs">
        <AiFillHome className="text-2xl mb-1" />
        <span>Home</span>
      </div>

      {/* Shorts */}
      <div className="flex flex-col items-center text-xs">
        <MdOutlineVideoLibrary className="text-2xl mb-1" />
        <span>Shorts</span>
      </div>

      {/* Add Button */}
      <div className="flex flex-col items-center text-xs">
        <IoIosAddCircle className="text-3xl text-pink-500" />
        <span className="invisible">Add</span>
      </div>

      {/* Search */}
      <div className="flex flex-col items-center text-xs">
        <AiOutlineSearch className="text-2xl mb-1" />
        <span>Search</span>
      </div>

      {/* Logout */}
      <div
        className="flex flex-col items-center text-xs cursor-pointer"
        onClick={handleLogout}
        title="Logout"
      >
        <FiLogOut className="text-2xl mb-1 text-red-400" />
        <span className="text-red-300">Logout</span>
      </div>
    </div>
  );
}
