import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const ResumeCard = ({ title, subTitle, message }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <div>
        <Text variant={"title4"}>{title}</Text>
        <Text variant={"title6"}>{subTitle}</Text>
        <Text variant={"text3"} color="gray100">
          {message}
        </Text>
      </div>
      <div className={classes.seperator} />
    </div>
  );
};
export default ResumeCard;
