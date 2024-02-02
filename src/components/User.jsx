import UserBalance from "./UserBalance";
import Basket from "./Basket";
import UserOrders from "./UserOrders";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const User = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  // const { username } = getParams;
  // conditional rendering? log in if no username? username state in app
  function logOut() {
    setLoggedInUser({});
  }

  return (
    <>
      <p>{loggedInUser.username} logged in</p>
      <UserBalance />
      <Basket />
      <UserOrders />
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default User;
