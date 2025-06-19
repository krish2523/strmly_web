import { useState } from "react";
import { FaHeart, FaCommentDots, FaShare, FaEllipsisV } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { fakeLikeApi } from "../services/fakeApi";

export default function OverlayRight({ data }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likes);
  const [loadingLike, setLoadingLike] = useState(false);

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  const handleLike = async () => {
    if (loadingLike) return;
    setLiked(true);
    setLikeCount((prev) => prev + 1);
    setLoadingLike(true);

    try {
      await fakeLikeApi(false); // simulate like
    } catch (err) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
      alert("Failed to like the post.");
    } finally {
      setLoadingLike(false);
    }
  };

  return (
    <div className="absolute bottom-20 right-4 flex flex-col items-center gap-4 text-white text-sm z-10">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleLike}
      >
        <FaHeart
          className={`text-2xl ${liked ? "text-red-500" : "text-white"}`}
        />
        <span>{formatNumber(likeCount)}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <FaCommentDots className="text-2xl" />
        <span>{formatNumber(data.comments)}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <FaShare className="text-2xl" />
        <span>{formatNumber(data.shares)}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <MdMonetizationOn className="text-2xl" />
        <span>₹ {formatNumber(data.earnings)}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <FaEllipsisV className="text-2xl" />
      </div>
    </div>
  );
}
