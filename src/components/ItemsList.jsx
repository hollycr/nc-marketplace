import { useEffect, useState } from "react";
import Item from "./Item";
import { getItems } from "../api/api";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import Grid from "@mui/material/Grid";

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
    <>
      <Categories />
      <h2>Items up for grabs!</h2>
      <Grid container spacing={2}>
        {items.map((item) => {
          return (
            <Grid item xs={4} key={item.item_id}>
              <Item username={username} item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ItemsList;
