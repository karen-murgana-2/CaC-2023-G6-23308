import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";
import { Footer } from "../components/Footer";

export const RecipeDetail = () => {
  let imgURL = "";
  let recipeName = "";
  let recipeCategory = "";
  let recipeArea = "";
  let recipeInstructions = "";
  let ingredientArray = [];

  const [recipe, setRecipe] = useState(null);
  let { idMeal } = useParams();

  useEffect(() => {
    get(`/lookup.php?i=${idMeal}`).then((data) => {
      setRecipe(data);
    });
  }, [idMeal]);

  let flagMounted = false;
  if (recipe != null && !flagMounted) {
    imgURL = `${recipe.meals[0].strMealThumb}`;
    recipeName = `${recipe.meals[0].strMeal}`;
    recipeCategory = `${recipe.meals[0].strCategory}`;
    recipeArea = `${recipe.meals[0].strArea}`;
    idMeal = `${recipe.meals[0].idMeal}`;
    recipeInstructions = `${recipe.meals[0].strInstructions}`;

    let index = 1;
    while (recipe.meals[0]['strIngredient' + index]) {
      ingredientArray.push({name: recipe.meals[0]['strIngredient' + index], amount: recipe.meals[0]['strMeasure' + index] ? recipe.meals[0]['strMeasure' + index]: ""});
      index++;
    }
    flagMounted = true;
  }

  return (
    <div className="containerDetail">
      
      {/* <Title /> */}

      <div className="containerRecipe">
        <div className="imagenDetalle">
          <div className="imagenRecipe">
            <img src={imgURL} alt="" srcSet="" />
          </div>
          <div className="detailText">
            <div className="detailTitles">{recipeName}</div>
            <div className="detailSubtitle">Category: {recipeCategory}</div>
            <div className="detailSubtitle">Area: {recipeArea}</div>
          </div>
        </div>
        <div className="line" />
        <div className="detailIngredients">
          <h1 className="detailTitles">Ingredients</h1>
          <ul>
            {
              ingredientArray.map((ingredient, index) => 
                <li key={index}>{ingredient.name.trim()}: {ingredient.amount.trim()+'.'}</li>
              )
            }
          </ul>
        </div>
        <div className="line" />
        <div className="detailInstructions">
          <h1 className="detailTitles">Instructions</h1>
          {recipeInstructions}
        </div>
      </div>

      <Footer />
    </div>
  );
};
