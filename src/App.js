import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";

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
