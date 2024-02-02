import UserBalance from "./UserBalance";
import Basket from "./Basket";
import UserOrders from "./UserOrders";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Login from "./Login";

const User = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const [isItemOrdered, setIsItemOrdered] = useState(false);

  if (!loggedInUser.username) {
    return <Login />;
  }
  return (
    <>
      <p>Welcome back {loggedInUser.username}!</p>
      {/* <UserBalance /> */}
      <Basket setIsItemOrdered={setIsItemOrdered} />
      <UserOrders isItemOrdered={isItemOrdered} />
      {/* <button onClick={logOut}>Log Out</button> */}
    </>
  );
};

export default User;
