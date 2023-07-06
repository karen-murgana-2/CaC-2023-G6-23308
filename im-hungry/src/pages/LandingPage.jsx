import React from "react";
import "./LandingPage.css";
import { Title } from "../components/Title";
import { RecipeMain } from "./RecipeMain";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  
  return (
    <div className="containerMain">
      <Navbar /> 
      <Title /> 
      <RecipeMain />
      <Footer />
    </div>
  );
};
