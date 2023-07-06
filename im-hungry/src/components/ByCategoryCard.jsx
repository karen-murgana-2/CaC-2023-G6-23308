import "./ByCategoryCard.css";
import React from "react";
import { Link } from "react-router-dom";

export const ByCategoryCard = ({ props }) => {
  return (
    <Link to={`/recipe/${props.idMeal}`} className="recipeName">
      <div className="byCategoryCard">
        <div className="imgByCat">
          <img src={props.strMealThumb} alt={props.strMeal} />
        </div>
        <div className="titleByCat">
          <p>{props.strMeal}</p>
        </div>
      </div>
    </Link>
  );
};
