import "./App.css";
import { Landing } from "./pages/Landing";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { state } = useAuthContext();
  const user = state.user;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={!user ? <Landing /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
