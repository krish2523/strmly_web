import fullData from "../data/videoData.json";

// Load all videos at once
export const fetchVideos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fullData);
    }, 1000);
  });
};
