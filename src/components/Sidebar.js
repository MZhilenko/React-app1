import React, { Component } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__nav">
                <a href="#s">Profile</a>
                <a href="#s">Messages</a>
                <a href="#s">News</a>
                <a href="#s">Music</a>
                <div className='line'></div>
                <a href="#s">Settings</a>
            </div>
        </div>
    );
}

export default Sidebar;