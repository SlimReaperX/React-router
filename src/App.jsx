import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <h1>We Are Live Baby</h1>
        <div id="navbar">
          <Link to={"/Home"}> Home </Link>
          <Link to={"/Blue"}> Blue </Link>
          <Link to={"/Red"}> Red </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Blue" element={<Blue />}></Route>
            <Route path="/Red" element={<Red />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
