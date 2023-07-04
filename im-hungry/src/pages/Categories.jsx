import { useEffect, useState } from "react";
import "./Categories.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";
import { Footer } from '../components/Footer';

export const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get(`/categories.php`).then((data) => {
      setCategories(data);
      setIsLoading(false);
    });
  }, []);

  /**
  Links API para filtrado categorías:
  https://www.themealdb.com/api/json/v1/1/categories.php
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
   */

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <>
      <div>

      </div>
      <Footer/>
    </>
  );
};
