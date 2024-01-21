import { useEffect, useState } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  const [mealList, setMealList] = useState(null);

  useEffect(() => {
    if (isLoading) {
      get("/search.php?s=").then((data) => {
        setMealList(data.meals[0]);
      });
    }
  }, []);

  return (
    <>
      <>
        Hola
        {mealList.map((meal, index) => meal.strMeal)}
      </>
    </>
  );
};
