import { postToBasket } from "../api/api";
import { useState } from "react";

const Item = ({ item, username }) => {
  const [usernameLoggedIn, setUsernameLoggedIn] = useState(username);
  const [buttonText, setButtonText] = useState("add to basket");
  function addToBasket() {
    console.log(item, "<< item in addtobasket");
    usernameLoggedIn
      ? postToBasket({ item_id: item.item_id }, usernameLoggedIn)
      : setButtonText("not logged in");
  }

  return (
    <div>
      <h4>Id:{item.item_id}</h4>
      <h3>Name: {item.item_name}</h3>
      <p>Price: £{item.price / 100}</p>
      <p>Description: {item.description}</p>
      <img src={item.img_url} alt="" />
      <button onClick={addToBasket}>{buttonText}</button>
    </div>
  );
};

export default Item;
