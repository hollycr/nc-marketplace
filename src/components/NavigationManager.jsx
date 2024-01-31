import { Link } from "react-router-dom";
import Categories from "./Categories";
import Sell from "./Sell";
import User from "./User";

const NavigationManager = () => {
  return (
    <>
      <ul>
        <li>
          <Categories />
        </li>
        <li>
          <Link to="/sell">
            <button>Sell</button>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <button>User</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavigationManager;
