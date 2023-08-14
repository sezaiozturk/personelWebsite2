import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const Title = ({ title }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors, theme: activeTheme });
  return (
    <div className={classes.container}>
      <Text
        variant="title5"
        color={activeTheme === "light" ? "black" : "primary"}
      >
        {title}
      </Text>
    </div>
  );
};
export default Title;
