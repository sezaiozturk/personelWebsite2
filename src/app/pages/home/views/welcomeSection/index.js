import React from "react";
import useStyle from "./stylesheet";
import { useNCoreTheme } from "ncore-web";

const WelcomeSection = () => {
  const classes = useStyle();
  const { activeTheme } = useNCoreTheme();
  return <div className={classes.container}>{activeTheme}</div>;
};

export default WelcomeSection;
