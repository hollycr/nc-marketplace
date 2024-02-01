import UserBalance from "./UserBalance";
import Basket from "./Basket";
import UserOrders from "./UserOrders";

const User = ({ basket, setBasket }) => {
  return (
    <>
      <p>User</p>
      <UserBalance />
      <Basket basket={basket} setBasket={setBasket} />
      <UserOrders />
    </>
  );
};

export default User;
