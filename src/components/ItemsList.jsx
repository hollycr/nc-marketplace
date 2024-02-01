import { useEffect, useState } from "react";
import Item from "./Item";
import { getItems } from "../api/api";
import { useParams } from "react-router-dom";

const ItemsList = ({ setBasket }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    return getItems(category, setItems);
  }, [category]);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <Item setBasket={setBasket} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
