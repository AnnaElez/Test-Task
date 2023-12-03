import React from "react";
import classes from "./Container.module.css";
import { useLocation } from "react-router-dom";

const Container = (props) => {
  const location = useLocation();

  const containerTheme = props.checked
    ? classes.container + " " + classes.containerDark
    : classes.container;

  const containerStyles =
    location.pathname === "/"
      ? classes.spaceAround + " " + containerTheme
      : containerTheme;

  return <div className={containerStyles}>{props.children}</div>;
};

export default Container;
