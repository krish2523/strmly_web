import { useEffect, useState, useRef, useCallback } from "react";
import { fetchVideos } from "../services/fetchVideos";
import VideoCard from "../components/VideoCard";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import BottomNav from "../components/BottomNav";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const observer = useRef();

  const LIMIT = 3;

  useEffect(() => {
    loadMoreVideos();
  }, []);

  const loadMoreVideos = async () => {
    setLoading(true);
    try {
      const newVideos = await fetchVideos(offset, LIMIT);
      if (newVideos.length > 0) {
        setVideos((prev) => [...prev, ...newVideos]);
        setOffset((prev) => prev + LIMIT);
      }
    } catch (err) {
      setError("Failed to load more videos.");
    } finally {
      setLoading(false);
    }
  };

  const lastVideoRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) loadMoreVideos();
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  if (error) return <ErrorScreen message={error} />;

  return (
    <>
      {/* pb-20 ensures BottomNav does not block last video */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory pb-20">
        {videos.map((video, index) => {
          const isLast = index === videos.length - 1;
          return (
            <div ref={isLast ? lastVideoRef : null} key={video.id}>
              <VideoCard data={video} />
            </div>
          );
        })}
        {loading && <LoadingScreen />}
      </div>

      {/* Fixed bottom nav bar for mobile */}
      <BottomNav />
    </>
  );
}
