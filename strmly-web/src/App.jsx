import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // localStorage.removeItem("userID"); // Commented out for dev
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userID");
    if (storedUser) setUser(storedUser);
  }, []);

  return user ? <HomePage /> : <LoginPage onLogin={setUser} />;
}

export default App;
