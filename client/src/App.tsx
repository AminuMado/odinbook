import "./App.css";
import { Landing } from "./pages/Landing";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
