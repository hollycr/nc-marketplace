import UserBalance from "./UserBalance";
import Basket from "./Basket";
import UserOrders from "./UserOrders";

const User = ({ username, setUsername }) => {
  // const { username } = getParams;
  // conditional rendering? log in if no username? username state in app
  function logOut() {
    setUsername("");
  }

  return (
    <>
      <p>{username} logged in</p>
      <UserBalance />
      <Basket />
      <UserOrders />
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default User;
