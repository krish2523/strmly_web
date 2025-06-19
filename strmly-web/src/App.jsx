import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 🧼 Force logout on every refresh (for dev/testing)
    localStorage.removeItem("userID");
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userID");
    if (storedUser) setUser(storedUser);
  }, []);

  return user ? <HomePage /> : <LoginPage onLogin={setUser} />;
}

export default App;
