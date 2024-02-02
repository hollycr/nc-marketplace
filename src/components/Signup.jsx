import { useContext, useState } from "react";
import { postUser } from "../api/api";
import UserContext from "../context/UserContext";
import User from "./User";

const Signup = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [newUserInput, setNewUserInput] = useState({
    username: "",
    avatar_url: "",
  });

  function handleNewUser(event) {
    event.preventDefault();
    console.log(newUserInput);
    postUser(newUserInput)
      .then((user) => {
        setLoggedInUser(user);
      })
      .catch((err) => {
        const error=JSON.parse(err.request.response)
        console.log((error.msg), "signup error");
        setErrorMessage(error.msg);
      });
  }

  return loggedInUser.username ? (
    <User />
  ) : (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleNewUser}>
        <label htmlFor="createUsername">Username</label>
        <input
          id="createUsername"
          type="text"
          value={newUserInput.username}
          onChange={(event) => {
            setNewUserInput({
              username: event.target.value,
              avatar_url: newUserInput.avatar_url,
            });
          }}
        />
        <label htmlFor="createAvatarURL">Avatar URL</label>
        <input
          id="createAvatarURL"
          type="text"
          value={newUserInput.avatar_url}
          onChange={(event) => {
            setNewUserInput({
              username: newUserInput.username,
              avatar_url: event.target.value,
            });
          }}
        />
        <button>Apply</button>
      </form>
      <p>{errorMessage}</p>
    </>
  );
};

export default Signup;
