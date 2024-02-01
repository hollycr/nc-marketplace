import { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import User from "./User";
import { Link } from "react-router-dom";

function Login({ setUsername, username }) {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [invalidUsername, setInvalidUsername] = useState("");

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
      setInvalidUsername("Invalid Username! Please Sign Up!");
    }
  }
  return username ? (
    <User username={username} setUsername={setUsername} />
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
      {invalidUsername && (
        <div>
          <p>{invalidUsername}</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Login;
