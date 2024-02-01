import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Categories</button>
      <ul>
        {isOpen
          ? categories.map((category) => (
              <li key={category.category_name}>
                <Link to={`/buy/${category.category_name}`}>
                  {category.category_name}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Categories;
