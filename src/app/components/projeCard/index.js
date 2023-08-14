import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const ProjeCard = ({ imgUrl }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={imgUrl} className={classes.image} />;
        <div className={classes.filter}>
          <i
            className="fa-solid fa-mobile-screen-button fa-4x"
            style={{ color: colors.primary, marginBottom: "2rem" }}
          ></i>
          <Text variant={"title4"} color="text">
            Software Development Community
          </Text>
          <Text variant={"text3"} color="gray">
            Kotlin Project
          </Text>
        </div>
      </div>
    </div>
  );
};
export default ProjeCard;
