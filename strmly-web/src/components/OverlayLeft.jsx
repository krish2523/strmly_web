import { useState } from "react";

export default function OverlayLeft({ data }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="absolute bottom-20 left-4 text-white max-w-[80%] z-10">
      <p className="text-sm text-pink-400 mb-1">
        #{data.title.replace(/\s/g, "")}
      </p>

      <div className="flex items-center gap-2 mb-2">
        <img
          src={data.userImage}
          alt={data.userName}
          className="w-8 h-8 rounded-full object-cover border border-white"
        />
        <p className="text-sm font-semibold">{data.userName}</p>
        <button
          onClick={handleFollow}
          className={`text-xs px-3 py-1 rounded-full border ${
            isFollowing
              ? "bg-white text-black"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <p className="text-sm font-medium mb-1">{data.title} • Ep 01</p>
      <p className="text-xs text-gray-200 line-clamp-3">{data.description}</p>
    </div>
  );
}
