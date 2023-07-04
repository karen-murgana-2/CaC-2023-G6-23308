/* Code generated with AutoHTML Plugin for Figma */
import "./Navbar.css";
import React, { useState } from "react";
import "../App.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /** TODO: Convertir anclas en Links de react-router-dom*/
  
  return (
    <div className="navbar">
      <a href="/" className="navBarItem">
        <img className="logoTenedor" src="/logoForkSpoon.png" alt=""/>
      </a>
      <div className={`navItems ${isOpen && "open"}`}>
        <a href="/" className="navBarItem">
          Home
        </a>
        <a href="/" className="navBarItem">
          Random Recipe
        </a>
        <a href="/" className="navBarItem">
          Categories
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
