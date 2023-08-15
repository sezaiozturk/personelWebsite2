import { Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const ProjeCard = ({ imgUrl, icon, title, description }) => {
  const { colors } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={imgUrl} className={classes.image} />
        <div className={classes.filter}>
          <i
            className={icon}
            style={{ color: colors.primary, marginBottom: "2rem" }}
          ></i>
          <Text variant={"title4"} color="text">
            {localize(title)}
          </Text>
          <Text variant={"text3"} color="gray">
            {localize(description)}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default ProjeCard;
