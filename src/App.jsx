import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "./api/api";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Search from "./components/Search";
import NavigationManager from "./components/NavigationManager";
import Sell from "./components/Sell";
import User from "./components/User";
import Login from "./components/Login";

function App() {
  const [username, setUsername] = useState("");

  // login/user - use api

  return (
    <>
      <Header />
      <Search />
      <NavigationManager username={username} />
      <Routes>
        <Route path="/" element={<ItemsList username={username} />} />
        <Route path="/sell" element={<Sell />} />
        <Route
          path="/user/:username"
          element={<User username={username} setUsername={setUsername} />}
        />
        <Route
          path="/buy/:category"
          element={<ItemsList username={username} />}
        />
        <Route
          path="/login"
          element={<Login username={username} setUsername={setUsername} />}
        />
      </Routes>
    </>
  );
}

export default App;
