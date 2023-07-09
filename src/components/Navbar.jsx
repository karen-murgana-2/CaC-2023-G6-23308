/* Code generated with AutoHTML Plugin for Figma */
import "./Navbar.css";
import React, { useState } from "react";
import "../App.css";
import { get } from "../utils/httpCliente";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRandom = (e) => {
    e.preventDefault();
    get("/random.php").then((data) => {
      navigate(`/recipe/${data.meals[0].idMeal}`);
      window.location.reload();
    });
  };

  return (
    <div className="navbar">
      <Link to="/" className="navBarItem">
        <img className="logoTenedor" src="/logoForkSpoon.png" alt="" />
      </Link>
      <div className={`navItems ${isOpen && "open"}`}>
        <Link to="/" className="navBarItem">
          Home
        </Link>
        <Link to="/categories" className="navBarItem">
          Categories
        </Link>
        <Link to="/" className="navBarItem" onClick={handleRandom}>
          Random Recipe
        </Link>
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
