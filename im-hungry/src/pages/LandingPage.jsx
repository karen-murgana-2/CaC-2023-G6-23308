import React from "react";
import "./LandingPage.css";
import { Title } from "../components/Title";
import { RecipeMain } from "./RecipeMain";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const LandingPage = () => {

  /** TODO: Arreglar para no cargar varias veces el navbar, el title y el footer */
  
  return (
    <div className="containerMain">
      <Navbar />
      <Title />
      <RecipeMain />
      <Footer />
    </div>
  );
};
