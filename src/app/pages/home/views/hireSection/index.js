import { Button, Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const HireSection = () => {
  const { colors, activeTheme } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors });

  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <div className={classes.content}>
          <Text variant="title1" color="text">
            {localize("workingMe")}
          </Text>
          <Button
            title={localize("hireMe")}
            spreadBehaviour="free"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
export default HireSection;
