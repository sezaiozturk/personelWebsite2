import React from "react";
import useStyle from "./stylesheet";
import { Button, useNCoreLocalization, useNCoreTheme } from "ncore-web";

const WelcomeSection = () => {
  const { activeTheme, colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const { localize } = useNCoreLocalization();
  return (
    <div id="home" className={classes.container}>
      <div className={classes.background}>
        <div className={classes.filter}>
          <div className={classes.contentContainer}>
            <span>{localize("hello")}</span>
            <div className={classes.typeWriter}>
              <span>{localize("job")}</span>
            </div>
            <a href="#portfolio">
              <Button
                title={localize("works")}
                spreadBehaviour="free"
                size="medium"
                textColor="black"
              />
            </a>
          </div>
          <a href="#about">
            <div className={classes.scrool}>
              <i className="fa-solid fa-arrow-down fa-2x"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
