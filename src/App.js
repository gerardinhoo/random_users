import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
// import Search from "./components/users/Search";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">{/* <Search /> */}</div>
      <Users />
    </div>
  );
};

export default App;
