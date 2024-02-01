import { Link } from "react-router-dom";
import { useState } from "react";
import Categories from "./Categories";
import Sell from "./Sell";
import User from "./User";

const NavigationManager = ({ username }) => {
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
          {username ? (
            <Link to={`/user/${username}`}>
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
