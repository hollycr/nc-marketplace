import { useContext, useEffect, useState } from "react";
import { getOrders } from "../api/api";
import UserContext from "../context/UserContext";

function UserOrders() {
  const { loggedInUser } = useContext(UserContext);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders(loggedInUser.username).then((data) => {
      setOrders(data);
    });
  },[]);
  let counter = 1;
  return (
    <>
      <p>User Orders</p>
      <ul>
        {orders.map((item) => {
          return (
            <li key={`Orders ${counter}`}>
              <p>Item: {counter++}</p>
              <h4>Id:{item.item_id}</h4>
              <h3>Name: {item.item_name}</h3>
              <p>Price: £{item.price / 100}</p>
              <p>Description: {item.description}</p>
              <img src={item.img_url} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserOrders;
