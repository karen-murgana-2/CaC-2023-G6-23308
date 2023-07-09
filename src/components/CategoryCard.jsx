import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

export const CategoryCard = ({ props }) => {
  return (
    <Link to={`c=${props.strCategory}`} className="card">
      <div className="categoryCard">
        <div className="categoryImg">
          <img src={props.strCategoryThumb} alt={props.strCategory} />
        </div>
        <div className="categoryDescription">
          <h1 className="catDescriptionTitle">{props.strCategory}</h1>
          <p className="catDescriptionText">{props.strCategoryDescription}</p>
        </div>
      </div>
    </Link>
  );
};
