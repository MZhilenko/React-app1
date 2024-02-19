import React, { Component } from "react";
import classes from "./Post.module.css";

const Post = () => {
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut alias eum
        facilis illo debitis similique libero odio quas blanditiis? Repellendus
        qui distinctio quam praesentium eum at magnam, aspernatur autem ipsum?
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
