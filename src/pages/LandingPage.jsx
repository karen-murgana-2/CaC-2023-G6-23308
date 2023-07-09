import React from "react";
import "./LandingPage.css";
import { Title } from "../components/Title";
import { RecipeMain } from "./RecipeMain";

export const LandingPage = () => {
  return (
    <div className="containerMain">
      <Title />
      <RecipeMain />
    </div>
  );
};
