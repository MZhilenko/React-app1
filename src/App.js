import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Posts from "./components/Profile/Posts/Posts";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="page">
          <Sidebar />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;
