import React from "react";
import useStyle from "./stylesheet";
import { Button, useNCoreLocalization, useNCoreTheme, Text } from "ncore-web";

const WelcomeSection = () => {
  const { activeTheme, colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const { localize } = useNCoreLocalization();
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.filter}>
          <div className={classes.contentContainer}>
            <span>{localize("hello")}</span>
            <div className={classes.typeWriter}>
              <span>{localize("job")}</span>
            </div>
            <Button
              title={localize("works")}
              spreadBehaviour="free"
              size="medium"
              textColor="black"
            />
          </div>
          <button className={classes.scrool}>
            <i class="fa-solid fa-arrow-down fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
