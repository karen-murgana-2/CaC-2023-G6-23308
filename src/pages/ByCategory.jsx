import { useEffect, useState } from "react";
import "./ByCategory.css";
import { get } from "../utils/httpCliente";
import { Spinner } from "../components/Spinner";
import { useParams } from "react-router-dom";
import { ByCategoryCard } from "../components/ByCategoryCard";

export const ByCategory = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { idCategory } = useParams();

  useEffect(() => {
    if (isLoading) {
      get(`/filter.php?c=${idCategory}`).then((data) => {
        setCategory(data.meals);
        setIsLoading(false);
      });
    }
  }, [idCategory, isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="gridContainerByCat">
        <h1 className="categoriesGridTitle">· {idCategory} ·</h1>
        <ul className="gridByCat">
          {category.map((category, index) => (
            <ByCategoryCard key={index} props={category} />
          ))}
        </ul>
      </div>
    </>
  );
};
