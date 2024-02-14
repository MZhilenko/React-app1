import React, { Component } from 'react';
import './Posts.css';
import Post from './Post';
import AddPost from './AddPost';
import ProfileCard from './ProfileCard';

const Posts = () => {
    return (
        <div className='posts'>
            <ProfileCard/>
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;