import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Categories from "./Categories";
import UserContext from "../context/UserContext";

const NavigationManager = () => {
  const { loggedInUser } = useContext(UserContext);
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
          {loggedInUser.username ? (
            <Link to={`/user/${loggedInUser.username}`}>
              <button>User</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
        </li>
      </ul>
    </>
  );
};

export default NavigationManager;
