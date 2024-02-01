import { useState } from "react";
import User from "./User";

function Login({ setUsername, username }) {
  const [usernameInput, setUsernameInput] = useState("");

  function logUserIn(event) {
    event.preventDefault();
    setUsername(usernameInput);
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
    </>
  );
}

export default Login;
