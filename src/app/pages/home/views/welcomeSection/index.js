import React, { useEffect } from "react";
import useStyle from "./stylesheet";
import { Button, useNCoreLocalization, useNCoreTheme, Text } from "ncore-web";
import { useInView } from "react-intersection-observer";

const WelcomeSection = () => {
  const { activeTheme, colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const { localize } = useNCoreLocalization();
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    sectionIsVisible && window.location.replace("#");
  }, [sectionIsVisible]);

  return (
    <div id="home" className={classes.container} ref={sectionRef}>
      <div className={classes.background}>
        <div className={classes.filter}>
          <div className={classes.contentContainer}>
            <Text variant="title2" color="secondary">
              {localize("hello")}
            </Text>
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
