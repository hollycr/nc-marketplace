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

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories(setCategories);
  }, []);

  const [basket, setBasket] = useState([]);
  console.log(basket, "<< basket");
  return (
    <>
      <Header />
      <Search />
      <NavigationManager categories={categories} />
      <Routes>
        <Route path="/" element={<ItemsList setBasket={setBasket} />} />
        <Route
          path="/sell"
          element={
            <Sell categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/user" element={<User />} />
        <Route
          path="/buy/:category"
          element={<ItemsList setBasket={setBasket} />}
        />
      </Routes>
    </>
  );
}

export default App;
