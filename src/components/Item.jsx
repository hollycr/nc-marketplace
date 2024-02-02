import { postToBasket } from "../api/api";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Card from "@mui/material/Card";

const Item = ({ item }) => {
  const { loggedInUser } = useContext(UserContext);
  const [buttonText, setButtonText] = useState("add to basket");
  function addToBasket() {
    console.log(item, "<< item in addtobasket");
    if (loggedInUser.username) {
      postToBasket({ item_id: item.item_id }, loggedInUser.username);
      setButtonText("added to your basket!");
    } else {
      setButtonText("oops - you're not logged in!");
    }
  }

  return (
    <Card variant="outlined">
      <h4>Id:{item.item_id}</h4>
      <h3>Name: {item.item_name}</h3>
      <p>Price: £{item.price / 100}</p>
      <p>Description: {item.description}</p>
      <img src={item.img_url} alt="" />
      <button onClick={addToBasket}>{buttonText}</button>
    </Card>
  );
};

export default Item;
