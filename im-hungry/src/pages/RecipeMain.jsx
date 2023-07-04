import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeMain.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";

export const RecipeMain = () => {
  let imgURL = "";
  let recipeName = "";
  let recipeCategory = "";
  let recipeArea = "";
  let idMeal = "";
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get("/random.php").then((data) => {
      setRecipe(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  // console.log("recipes name: " + JSON.stringify(recipe.meals[0].strMeal));
  // console.log(imgURL);
  let flagMounted = false;
  if (recipe != null && !flagMounted) {
    imgURL = `${recipe.meals[0].strMealThumb}`;
    recipeName = `${recipe.meals[0].strMeal}`;
    recipeCategory = `${recipe.meals[0].strCategory}`;
    recipeArea = `${recipe.meals[0].strArea}`;
    idMeal = `${recipe.meals[0].idMeal}`;
    flagMounted = true;
  }

  return (
    <div className="containerDos" >
      <div className="pictureContainer">
        <img src={imgURL} alt="recipe" srcSet="" id="" />
      </div>
      <div className="detailsContainer">
        <div className="recipeName">
          <Link to={`/recipe/${idMeal}`} className="recipeName">
            {" "}
            {recipeName}
          </Link>
        </div>
        <div className="recipeCategory">Category: {recipeCategory}</div>
        <div className="recipeCategory">Area: {recipeArea}</div>
      </div>
    </div>
  );
};
