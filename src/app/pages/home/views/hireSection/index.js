import { Button, Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const HireSection = () => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <div className={classes.content}>
          <Text variant="title1" color="text">
            Interested in working with me?
          </Text>
          <Button title="Hire Me!" spreadBehaviour="free" variant="outlined" />
        </div>
      </div>
    </div>
  );
};
export default HireSection;
