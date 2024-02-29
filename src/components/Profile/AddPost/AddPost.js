import React, { Component } from "react";
import classes from "./AddPost.module.css";

const AddPost = (props) => {
  let refTextArea = React.createRef();
  let onAddPost = (e) => {
    e.preventDefault();
    let text = refTextArea.current.value;
    props.addPost(text);
    refTextArea.current.value = "";
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
    console.log(props.newPostText);
  };

  return (
    <div className={classes.addPost}>
      <form>
        <textarea
          type="text"
          ref={refTextArea}
          className={classes.input}
          onChange={(e) => onPostChange(e)}
          value={props.newPostText}
          placeholder="Enter your text"
        />
        <button className={classes.btn} onClick={(e) => onAddPost(e)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#ffffff"
                stroke-width="1.6799999999999997"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#ffffff"
                stroke-width="1.6799999999999997"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddPost;
