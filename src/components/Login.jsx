import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api/api";
import User from "./User";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function Login() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const [currentUsers, setCurrentUsers] = useState([]);
  const [invalidUsernameMessage, setInvalidUsernameMessage] = useState("");

  useEffect(() => {
    getUsers().then((data) => {
      setCurrentUsers(data);
    });
  }, []);

  const [usernameInput, setUsernameInput] = useState("");

  function logUserIn(event) {
    event.preventDefault();
    const validUsers = currentUsers.filter(
      (user) => user.username === usernameInput
    );
    console.log(validUsers, "<<valid Users");
    if (validUsers.length === 0) {
      setInvalidUsernameMessage("Invalid Username! Please Sign Up!");
    } else {
      setLoggedInUser(validUsers[0]);
    }
  }
  console.log(loggedInUser.username, "loggedin user");
  return loggedInUser.username ? (
    <User />
  ) : (
    <>
      <h3>Log in page</h3>
      <form onSubmit={logUserIn}>
        <label htmlFor="username-login"></label>
        <input
          value={usernameInput}
          onChange={(event) => {
            setUsernameInput(event.target.value);
          }}
          id="username-login"
          type="text"
        />
        <button>Log in</button>
      </form>
      {invalidUsernameMessage && (
        <div>
          <p>{invalidUsernameMessage}</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Login;
