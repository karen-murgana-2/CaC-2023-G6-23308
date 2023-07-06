import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

export const CategoryCard = ({ props }) => {
  return (
    <div className="categoryCard">
      <div className="categoryImg">
        <Link to={`/categories/${props.strCategory}`} className="card">
          <img src={props.strCategoryThumb} alt={props.strCategory} />
        </Link>
      </div>
      <div className="categoryDescription">
        <h1 className="catDescriptionTitle">
          <Link to={`/categories/${props.strCategory}`} className="card">
            {props.strCategory}
          </Link>
        </h1>
        <p className="catDescriptionText">{props.strCategoryDescription}</p>
      </div>
    </div>
  );
};
