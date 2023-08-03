import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";
import ErrorPages from "./Pages/ErrorPages";
import Home from "./Pages/Home";
import User from "./Pages/User";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<ErrorPages />} />
      </Routes>
    </div>
  );
}

export default App;
