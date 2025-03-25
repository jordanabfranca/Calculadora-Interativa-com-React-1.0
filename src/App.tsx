import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Logo from "./components/logo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
    </Router>
  );
}

export default App;
