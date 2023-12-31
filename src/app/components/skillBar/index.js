import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const SkillBar = ({ title, parcent }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ parcent, color: colors });
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Text variant="title5">{title}</Text>
        <Text variant="title5">{parcent}%</Text>
      </div>
      <div className={classes.bar}>
        <div />
        <div />
      </div>
    </div>
  );
};
export default SkillBar;
