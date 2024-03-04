import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="page">
            <Sidebar />
            <div className="app-content">
              <Routes>
                <Route
                  path="profile"
                  element={
                    <Profile
                    // posts={props.state.profilePage.posts}
                    // dispatch={props.dispatch}
                    // newPostText={props.state.profilePage.newPostText}
                    />
                  }
                ></Route>
                <Route
                  path="messages"
                  element={
                    <Dialogs
                    // dialogs={props.state.dialogsPage.dialogs}
                    // dispatch={props.dispatch}
                    // messages={props.state.dialogsPage.messages}
                    // newMessageText={props.state.dialogsPage.newMessageText}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
