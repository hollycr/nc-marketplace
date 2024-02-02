import { postToBasket } from "../api/api";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Item = ({ item }) => {
  const { loggedInUser } = useContext(UserContext);
  const [buttonText, setButtonText] = useState("add to basket");
  function addToBasket() {
    console.log(item, "<< item in addtobasket");
    loggedInUser.username
      ? postToBasket({ item_id: item.item_id }, loggedInUser.username)
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
