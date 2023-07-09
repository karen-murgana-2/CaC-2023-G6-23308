import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeMain.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";

export const RecipeMain = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      get("/random.php").then((data) => {
        setRecipe(data.meals[0]);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="containerDos">
      <div className="pictureContainer">
        <Link to={`/recipe/${recipe.idMeal}`} className="recipeName">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} srcSet="" id="" />
        </Link>
      </div>
      <div className="detailsContainer">
        <div className="recipeName">
          <Link to={`/recipe/${recipe.idMeal}`} className="recipeName">
            {" "}
            {recipe.strMeal}
          </Link>
        </div>
        <div className="recipeCategory">
          Category:{" "}
          <Link to={`/categories/${recipe.strCategory}`} className="card">
            {recipe.strCategory}
          </Link>
        </div>
        <div className="recipeCategory">Area: {recipe.strArea}</div>
      </div>
    </div>
  );
};
