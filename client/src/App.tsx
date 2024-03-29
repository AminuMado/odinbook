import "./App.css";
import { Landing } from "./pages/Landing";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Notifications } from "./pages/Notifications";
import { Explore } from "./pages/Explore";
function App() {
  const { state } = useAuthContext();
  const user = state.user;
  return (
    <BrowserRouter>
      <div className="App">
        {user && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={!user ? <Landing /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/notification"
            element={user ? <Notifications /> : <Navigate to="/" />}
          />{" "}
          <Route
            path="/explore"
            element={user ? <Explore /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
