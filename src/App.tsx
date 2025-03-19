import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
