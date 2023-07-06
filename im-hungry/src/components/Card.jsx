import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ props }) => {
  return (
    <Link to="/" class="card">
        <div className="card-box">
            <div className="img-box">
                <img src={props.strCategoryThumb} alt={props.strCategory} />
            </div>     
            <div className="title-box">
                <p>{props.strCategory}</p>      
            </div>  
            <div className="description-box">
                <p>{props.strCategoryDescription}</p>      
            </div>  
        </div>
    </Link>
  );
}