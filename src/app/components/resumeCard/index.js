import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const ResumeCard = ({ title, subTitle, message }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <div>
        <Text variant={"text"}>{title}</Text>
        <Text variant={"text"}>{subTitle}</Text>
        <Text variant={"text"}>{message}</Text>
      </div>
      <div className={classes.seperator} />
    </div>
  );
};
export default ResumeCard;
