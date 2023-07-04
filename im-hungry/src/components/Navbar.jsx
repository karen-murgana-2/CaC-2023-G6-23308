/* Code generated with AutoHTML Plugin for Figma */
import "./Navbar.css";
import React, { useState } from "react";
import "../App.css";
import { get } from "../utils/httpCliente";
import { Navigate, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRandom = (e) => {
    e.preventDefault();
    get("/random.php").then((data) => {
      console.log("data: " + JSON.stringify(data));
      navigate(`/recipe/${data.meals[0].idMeal}`);
      window.location.reload();
    });
  };

  return (
    <div className="navbar">
      <a href="/" className="navBarItem">
        <img className="logoTenedor" src="/logoForkSpoon.png" alt="" />
      </a>
      <div className={`navItems ${isOpen && "open"}`}>
        <a href="/" className="navBarItem">
          Home
        </a>
        <a href="/categories" className="navBarItem">
          Categories
        </a>
        <a href="/" className="navBarItem" onClick={handleRandom}>
          Random Recipe
        </a>
      </div>

      <div
        className={`navToggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
