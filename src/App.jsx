import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Search from "./components/Search";
import NavigationManager from "./components/NavigationManager";
import Sell from "./components/Sell";
import User from "./components/User";

function App() {
  return (
    <>
      <Header />
      <Search />
      <NavigationManager />
      <Routes>
        <Route path="/" element={<ItemsList />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/user" element={<User />} />
        <Route path="/buy/:category" element={<ItemsList />} />
      </Routes>
    </>
  );
}

export default App;
