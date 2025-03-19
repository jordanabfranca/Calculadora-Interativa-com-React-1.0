import React from "react";
import Calculator from "./Calculator";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#394763] h-screen justify-center items-center">
      <div className=" flex justify-center items-center">
        <Link to="/calculator">
          <button className="bg-[#242c43] px-4 py-2 mt-20 rounded">
            Abrir Calculadora
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
