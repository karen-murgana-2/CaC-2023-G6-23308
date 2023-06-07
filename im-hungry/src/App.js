import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [meals, setMeals] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(url);
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMeals();
  }, []);

  if (meals.length === 0) return;

  return (
    <div className="App">
      <p>{meals.meals[0].strInstructions}</p>
    </div>
  );
}

export default App;
