import { useEffect, useState } from "react";
import "./Categories.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";
import { CategoryCard } from "../components/CategoryCard";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      get(`/categories.php`).then((data) => {
        setCategories(data.categories);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  if (isLoading || categories.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <div className="gridContainer">
        <h1 className="categoriesGridTitle">· Categories ·</h1>
        <ul className="categoriesGrid">
          {categories.map((category, index) => (
            <CategoryCard key={index} props={category} />
          ))}
        </ul>
      </div>
    </>
  );
};
