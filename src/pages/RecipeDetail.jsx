import { Link, useParams } from "react-router-dom";
import "./RecipeDetail.css";
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";

export const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { idMeal } = useParams();

  useEffect(() => {
    if (isLoading) {
      get(`/lookup.php?i=${idMeal}`).then((data) => {
        setRecipe(data.meals[0]);
        setIsLoading(false);
      });
    }
  }, [idMeal, isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  let ingredientArray = [];
  let index = 1;
  while (recipe["strIngredient" + index]) {
    ingredientArray.push({
      name: recipe["strIngredient" + index],
      amount: recipe["strMeasure" + index] ? recipe["strMeasure" + index] : "",
    });
    index++;
  }

  window.scrollTo(0, 0);
  return (
    <div className="containerDetail" key={recipe.idMeal}>
      <div className="containerRecipe">
        <div className="imagenDetalle">
          <div className="imagenRecipe">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              srcSet={recipe.strMealThumb}
            />
          </div>
          <div className="detailText">
            <div className="detailTitles">{recipe.strMeal}</div>
            <div className="detailSubtitle">
              Category:{" "}
              <Link to={`/categories/c=${recipe.strCategory}`} className="card">
                {recipe.strCategory}
              </Link>
            </div>
            <div className="detailSubtitle">
              Area:{" "}
              <Link to={`/categories/a=${recipe.strArea}`} className="card">
                {recipe.strArea}
              </Link>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="detailIngredients">
          <h1 className="detailTitles">Ingredients</h1>
          <ul className="ingredients">
            {ingredientArray.map((ingredient, index) => (
              <li key={index}>
                <Link to={`/categories/i=${ingredient.name}`} className="card">
                  {ingredient.name.trim()}
                </Link>
                : {ingredient.amount.trim() + "."}
              </li>
            ))}
          </ul>
        </div>
        <div className="line" />
        <div className="detailInstructions">
          <h1 className="detailTitles">Instructions</h1>
          {recipe.strInstructions}
        </div>
      </div>
    </div>
  );
};
