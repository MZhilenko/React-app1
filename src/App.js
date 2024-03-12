import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className="container">
          <div className="page">
            <Sidebar />
            <div className="app-content">
              <Routes>
                <Route
                  path="/profile/:userId?"
                  element={<ProfileContainer />}
                ></Route>
                <Route
                  path="/messages"
                  element={
                    <Dialogs
                    // dialogs={props.state.dialogsPage.dialogs}
                    // dispatch={props.dispatch}
                    // messages={props.state.dialogsPage.messages}
                    // newMessageText={props.state.dialogsPage.newMessageText}
                    />
                  }
                />
                <Route path="/users" element={<UsersContainer />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
