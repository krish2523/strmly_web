import { useRef, useEffect, useState } from "react";
import useInView from "../hooks/useInView";
import OverlayLeft from "./OverlayLeft";
import OverlayRight from "./OverlayRight";

export default function VideoCard({ data }) {
  const [containerRef, inView] = useInView();
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;

    if (inView) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }

    setIsPlaying((prev) => !prev);
  };

  const toggleMute = (e) => {
    e.stopPropagation(); // prevents pausing when mute icon is tapped
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="snap-start h-screen w-full flex items-center justify-center bg-black relative"
    >
      {/* 9:16 Fixed Frame */}
      <div className="relative aspect-[9/16] w-full max-w-[450px] bg-black overflow-hidden">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={data.videoUrl}
          className="object-cover w-full h-full"
          loop
          muted={isMuted}
          playsInline
          autoPlay
          onClick={handleVideoClick}
        />

        {/* 🔇 Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 left-4 bg-black bg-opacity-60 text-white text-xl p-2 rounded-full z-20"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        {/* Overlays */}
        <OverlayLeft data={data} />
        <OverlayRight data={data} />
      </div>
    </div>
  );
}
