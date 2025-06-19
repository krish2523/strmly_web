import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("userID", username);
      onLogin(username);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden px-4">
      {/* Glowing Background Gradient */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      {/* Login Card */}
      <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 shadow-2xl p-8 w-full max-w-sm z-10">
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-transparent bg-clip-text">
          STRMLY
        </h1>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Watch. Earn. Repeat.
        </p>

        {/* Input Field */}
        <div className="flex items-center bg-gray-800 px-4 py-3 rounded mb-4 border border-gray-700 focus-within:border-pink-500 transition">
          <FaUser className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Your creator username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-transparent focus:outline-none text-white w-full placeholder-gray-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-pink-500 hover:bg-pink-600 w-full py-2 rounded text-white font-semibold shadow-md transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
