# STRMLY - Frontend Developer Challenge 🎬

An immersive short-video feed web app inspired by YouTube Shorts, Reels, and TikTok — built from scratch using React.js and Tailwind CSS for STRMLY's Frontend Developer assignment.

## 🔧 Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Icons
- HTML5 Video
- localStorage for login simulation
- IntersectionObserver API
- Optional: Prettier, ESLint

---

## 🎯 Features

✅ Vertical video feed (like TikTok/Shorts)  
✅ Snap-scrolling with IntersectionObserver  
✅ Auto-play when video comes into view  
✅ Tap to play/pause  
✅ Separate mute/unmute toggle 🔊  
✅ Hashtag, creator info, follow button  
✅ Right overlay: Like, Comment, Share, Tip, Menu  
✅ Dummy Like API with optimistic UI update  
✅ 3-line clamped description using Tailwind  
✅ Bottom mobile nav bar (5 tabs)  
✅ Infinite scroll (via simulated API)  
✅ Dummy login flow with localStorage  
✅ Fully responsive: Mobile, Tablet, Desktop  

---

## 🗂️ Folder Structure

strmly-web/
├── public/
│ └── assets/ # User avatars
│ └── videos/ # (Optional for local videos)
├── src/
│ ├── components/ # VideoCard, Overlays, BottomNav,LoadingScreen, ErrorScreen
│ ├── data/ # videoData.json
│ ├── hooks/ # useInView
│ ├── pages/ # HomePage, LoginPage
│ ├── services/ # fakeLikeApi, fetchVideos
│ ├── App.jsx
│ └── main.jsx

### ✅ Learned a lot about:
- Tailwind’s mobile-first approach
- Browser autoplay policies
- UI layering and absolute positioning
- Simulating APIs and optimistic UI updates