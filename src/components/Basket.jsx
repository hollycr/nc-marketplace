import { useContext, useEffect, useState } from "react";
import { getBasket, deleteFromBasket, postOrder } from "../api/api";
import UserContext from "../context/UserContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Basket({ setIsItemOrdered }) {
  const [basket, setBasket] = useState([]);
  const [deletedItems, setDeletedItems] = useState(1);
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
        setIsItemOrdered(true);
      });
    });
    setIsItemOrdered(false);
  }

  let counter = 1;
  return (
    <>
      <h3>Your basket:</h3>
      {basket.length === 0 ? (
        <p>You haven't added anything to your basket yet!</p>
      ) : (
        <ul>
          {basket.map((item) => {
            return (
              <Card variant="outlined">
                <li key={`Basket ${counter}`}>
                  <p>
                    Item: {counter++} Id:{item.item_id}
                  </p>
                  <h4>Name: {item.item_name}</h4>
                  <p>Price: £{item.price / 100}</p>
                  <p>Description: {item.description}</p>
                  <img src={item.img_url} alt="" />
                  <div>
                    <button value={item.item_id} onClick={removeFromBasket}>
                      Remove Item
                    </button>
                    <button value={item.item_id} onClick={orderItem}>
                      Order Item
                    </button>
                  </div>
                </li>
              </Card>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Basket;
