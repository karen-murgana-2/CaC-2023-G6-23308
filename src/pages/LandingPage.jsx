import React from "react";
import "./LandingPage.css";
import { Title } from "../components/Title";
import { RecipeMain } from "./RecipeMain";
import { SearchBar } from "./SearchBar";

export const LandingPage = () => {
  return (
    <div className="containerMain">
      <SearchBar />
      <Title />
      <RecipeMain />
    </div>
  );
};
