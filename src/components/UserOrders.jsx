import { useContext, useEffect, useState } from "react";
import { getOrders } from "../api/api";
import UserContext from "../context/UserContext";
import Card from "@mui/material/Card";

function UserOrders({ isItemOrdered }) {
  const { loggedInUser } = useContext(UserContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(loggedInUser.username).then((data) => {
      setOrders(data);
    });
  }, [isItemOrdered]);
  let counter = 1;

  console.log(
    isItemOrdered,
    "<< is item ordered (triggers rerender of orders)"
  );

  return (
    <>
      <h3>Your Orders:</h3>
      {orders.length === 0 ? (
        <p>You haven't made any orders yet!</p>
      ) : (
        <ul>
          {orders.map((item) => {
            return (
              <Card variant="outlined">
                <li key={`Orders ${counter}`}>
                  <p>Item: {counter++}</p>
                  <h4>Id:{item.item_id}</h4>
                  <h3>Name: {item.item_name}</h3>
                  <p>Price: £{item.price / 100}</p>
                  <p>Description: {item.description}</p>
                  <img src={item.img_url} alt="" />
                </li>
              </Card>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default UserOrders;
