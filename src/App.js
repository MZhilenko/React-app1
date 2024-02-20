import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Posts from "./components/Profile/Posts/Posts";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="page">
            <Sidebar />
            <div className="app-content">
              <Routes>
                <Route path="*" element={<Posts />} />
                <Route path="messages" element={<Dialogs />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
