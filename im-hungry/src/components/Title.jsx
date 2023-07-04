/* Code generated with AutoHTML Plugin for Figma */
import "./Title.css";
import { get } from "../utils/httpCliente";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Title = () => {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault(); 
    get(`/search.php?s=${searchText}`).then((data) => {
      navigate(`/recipe/${data.meals[0].idMeal}`);
      window.location.reload();
    });

    
  };

  return (
    <div className="containerOne">
      <img className="title" src="/title.png" alt="" srcSet="" />

      <p className="p1">
        Search recipe by name
      </p>
      <form className="searchBar" onSubmit={handleSubmit}>
        <div className="barra">
          <input
            className="searchInput"
            type="text"
            name="Search"
            id="searchInput"
            placeholder="Search..."
            autoComplete="off"
            value={searchText}
            autoFocus
            onChange={(e)=> setSearchText(e.target.value)}
          />
          <button type="submit" className="buscadorButton">
            <img src="/lupa.png" alt="" srcSet="" className="lupa" />
          </button>
        </div>
      </form>
    </div>
  );
};
