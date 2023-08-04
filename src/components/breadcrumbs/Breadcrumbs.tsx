import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const [crumbs, setCrumbs] = useState<string[]>([]);
  const path = useLocation().pathname;

  useEffect(() => {
    const crumbsArray = path.split("/");
    const filteredCrumbs = crumbsArray.filter((crumb) => crumb !== "");
    setCrumbs(filteredCrumbs);
  }, [path]);

  return (
    <ul className="breadcrumbs">
      {crumbs.map((crumb) => (
        <li key={crumb}>
          <div className="flex gap-1 p-3 text-gray-500 bg-gray-300">
            <img src="/src/assets/circle.svg" alt="circle icon" />
            <h3>{crumb === "about-us" ? "О нас" : crumb === 'categories' ? 'Категории' : crumb === 'vacancies' ? 'Вакансии' : crumb}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;








<img src="/src/assets/circle.svg" alt="circle icon" />