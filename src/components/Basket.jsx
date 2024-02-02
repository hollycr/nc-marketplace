import { useContext, useEffect, useState } from "react";
import { getBasket, deleteFromBasket, postOrder } from "../api/api";
import UserContext from "../context/UserContext";

function Basket() {
  const [basket, setBasket] = useState([]);
  const [deletedItems, setDeletedItems] = useState(1);
  console.log(deletedItems);
  //console.log(basket, "<< basket in basket");
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getBasket(loggedInUser.username).then((data) => {
      setBasket(data);
    });
  }, [deletedItems]);

  function removeFromBasket(event) {
    const id = event.target.value;
    deleteFromBasket(loggedInUser.username, id).then(() => {
      setDeletedItems((currentDeletedItem) => {
        return (currentDeletedItem += 1);
      });
    });
  }

  function orderItem(event) {
    const id = event.target.value;
    postOrder(loggedInUser.username, id).then(() => {
      deleteFromBasket(loggedInUser.username, id).then(() => {
        setDeletedItems((currentDeletedItem) => {
          return (currentDeletedItem += 1);
        });
      });
    });
  }

  let counter = 1;
  return (
    <>
      <p>user basket</p>
      <ul>
        {basket.map((item) => {
          return (
            <li key={`Basket ${counter}`}>
              <p>Item: {counter++}</p>
              <h4>Id:{item.item_id}</h4>
              <h3>Name: {item.item_name}</h3>
              <p>Price: £{item.price / 100}</p>
              <p>Description: {item.description}</p>
              <img src={item.img_url} alt="" />
              <button value={item.item_id} onClick={removeFromBasket}>
                Remove Item
              </button>
              <button value={item.item_id} onClick={orderItem}>
                Order Item
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Basket;
