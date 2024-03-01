import React from "react";
import classes from "./addMessage.module.css";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
const AddMessage = (props) => {
  let refTextMessage = React.createRef();
  let onAddMessage = (e) => {
    e.preventDefault();
    props.dispatch(addMessageActionCreator());
    props.dispatch(updateNewMessageTextActionCreator(""));
  };
  let onChangeText = (e) => {
    let newText = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(newText));
    console.log(props.newMessageText);
  };
  return (
    <div className={classes.addMessage}>
      <form onSubmit={(e) => onAddMessage(e)}>
        <textarea
          type="text"
          ref={refTextMessage}
          className={classes.input}
          onChange={(e) => onChangeText(e)}
          value={props.newMessageText}
          placeholder="Enter your text"
        />
        <button className={classes.btn} type="submit">
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4099ff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>send-solid</title>{" "}
              <g id="Layer_2" data-name="Layer 2">
                {" "}
                <g id="invisible_box" data-name="invisible box">
                  {" "}
                  <rect width="48" height="48" fill="none"></rect>{" "}
                </g>{" "}
                <g id="icons_Q2" data-name="icons Q2">
                  {" "}
                  <path d="M44.9,23.2l-38-18L6,5A2,2,0,0,0,4,7L9.3,23H24a2.1,2.1,0,0,1,2,2,2,2,0,0,1-2,2H9.3L4,43a2,2,0,0,0,2,2l.9-.2,38-18A2,2,0,0,0,44.9,23.2Z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddMessage;
