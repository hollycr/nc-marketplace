import { useEffect, useState } from "react";
import Item from "./Item";
import { getItems } from "../api/api";
import { useParams } from "react-router-dom";

const ItemsList = ({ setBasket, username }) => {
  console.log(username, "<< username in itemsList");
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(category).then((res) => {
      setItems(res);
    });
  }, [category]);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <Item username={username} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
