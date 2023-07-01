import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";
import { Navbar } from "../components/Navbar";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";

/** 
 * TODO: Hacer lista de ingredientes más cantidades, iterando las claves
 * en el json y usando de condicional:
 * strMeasure[n] != " "
 * strIngredient[n] != ""
 */

export const RecipeDetail = () => {
  let imgURL = "";
  let recipeName = "";
  let recipeCategory = "";
  let recipeArea = "";
  let recipeInstructions = "";
  // let recipeIngredients = [];
  // let recipeAmounts = [];

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

    //console.log(`${recipe.meals[0].strIngredient}`)

    flagMounted = true;
  }

  /** TODO: Arreglar para no cargar varias veces el navbar, el title y el footer */

  return (
    <div className="containerDetail">
      <Navbar />
      <Title />

      <div className="containerRecipe">
        <div className="imagenDetalle">
          <div className="imagenRecipe">
            <img src={imgURL} alt="" srcset="" />
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
