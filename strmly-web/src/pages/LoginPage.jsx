import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("userID", username);
      onLogin(username);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-6">STRMLY Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-800 px-4 py-2 rounded mb-4 w-full max-w-xs text-center"
      />
      <button
        onClick={handleLogin}
        className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded text-white font-semibold"
      >
        Log In
      </button>
    </div>
  );
}
