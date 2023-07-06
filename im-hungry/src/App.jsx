import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { RecipeDetail } from "./pages/RecipeDetail";
//import { Navbar } from "./components/Navbar";
//import { Title } from "./components/Title";
import { Categories } from "./pages/Categories";

export default function App() {

  return (
    <BrowserRouter>
      {/* <Navbar />
      <Title /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipe/:idMeal" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
