import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Navbar } from "./components/Navbar";
import { Categories } from "./pages/Categories";
import { ByCategory } from "./pages/ByCategory";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:idCategory" element={<ByCategory />} />
        <Route path="/recipe/:idMeal" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
