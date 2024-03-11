import React from "react";
import classes from "./Preloader.module.css";
import preloaderGif from "../../../assets/images/preloader.svg";

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloaderGif} />
    </div>
  );
};

export default Preloader;
