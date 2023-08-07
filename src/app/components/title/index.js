import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const Title = ({ title }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <Text variant="title2">{title}</Text>
    </div>
  );
};
export default Title;
