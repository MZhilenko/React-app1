import React, { Component } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={classes.post}>
      <div className={classes.profile}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          className={classes.icon}
          alt="author"
        />
        <div className={classes.info}>
          <div className={classes.author}>Ivan Ivanov</div>
          <div className={classes.time}>11.01.2024</div>
        </div>
      </div>
      <div className={classes.text}>
        {props.text}
      </div>
      <img
        src="https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg"
        className={classes.img}
        alt="space"
      />
    </div>
  );
};

export default Post;
