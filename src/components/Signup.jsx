const Signup = () => {
  const [usernameInput, setUsernameInput] = useState({
    username: "",
    avatar_url: "",
  });

  function handleNewUser() {}

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleNewUser}>
        <label htmlFor="createUsername">Username</label>
        <input
          type="text"
          value={usernameInput.username}
          onChange={(event) => {
            setUsernameInput(event.target.value);
          }}
        />
        <label htmlFor="createAvatarURL">Avatar URL</label>
        <input
          type="text"
          value={usernameInput.avatar_url}
          onChange={(event) => {
            setUsernameInput(event.target.value);
          }}
        />
        <button>Apply</button>
      </form>
    </>
  );
};

export default Signup;
