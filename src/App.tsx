import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Home />
      <Search />
    </div>
  );
}

export default App;
