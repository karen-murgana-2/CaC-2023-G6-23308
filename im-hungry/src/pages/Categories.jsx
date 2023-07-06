import { useEffect, useState } from "react";
import "./Categories.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";
import { Footer } from '../components/Footer';
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      get(`/categories.php`).then((data) => {
        setCategories(data.categories);
        console.log(data.categories)
        setIsLoading(false);
      });
    }
    
  }, [isLoading]);

  /**
  Links API para filtrado categorías:
  https://www.themealdb.com/api/json/v1/1/categories.php
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
   */

  if (isLoading || categories.length===0) {
    return <Spinner />;
  }


  return (
    <>
      <Navbar/>
      <div className="cardsGrid">
        <ul className="moviesGrid">
          {
            categories.map((category,index) => (
              <Card key={index} props={category} />
            ))
          }
        </ul>
      </div>
      <Footer/>
    </>
  );
};
