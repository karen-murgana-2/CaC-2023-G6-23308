import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";

export default function App() {

  /** TODO: Agregar funcionalidad al buscador */
  /** TODO: Agregar funcionalidad a random recipe (solo tiene que mandar la id a RecipeDetail) */
  /** TODO: Agregar página para Categories: https://www.themealdb.com/api/json/v1/1/categories.php*/

  return (
    
    <BrowserRouter >  
      <Navbar />  
      <Title />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/?search=:idMeal" element={<RecipeDetail />} /> */}
        <Route path="/recipe/:idMeal" element={<RecipeDetail />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
