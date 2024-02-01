import UserBalance from "./UserBalance";
import Basket from "./Basket";
import UserOrders from "./UserOrders";

const User = () => {
  return (
    <>
      <p>User</p>
      <UserBalance />
      <Basket />
      <UserOrders />
    </>
  );
};

export default User;
