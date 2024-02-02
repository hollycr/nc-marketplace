import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "./api/api";
import "./App.css";
import ItemsList from "./components/ItemsList";
import NavigationManager from "./components/NavigationManager";
import Sell from "./components/Sell";
import User from "./components/User";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserContext from "./context/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // login/user - use api

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <NavigationManager />
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/buy/:category" element={<ItemsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
