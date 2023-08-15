import { useNCoreLocalization, useNCoreTheme, Text } from "ncore-web";
import useStyle from "./stylesheet";
const Footer = () => {
  const { localize } = useNCoreLocalization();
  const { colors, activeTheme, switchTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <Text variant="title5" color="text">
        {`${localize("copyright")} © 2023 `}
        <Text
          variant="title5"
          color="primary"
          style={{ textDecoration: "underline" }}
        >
          Sezai
        </Text>
        {`.${localize("reserve")}.`}
      </Text>
      <Text variant="title5" color="text">
        {localize("designedBy") + " "}
        <Text
          variant="title5"
          color="primary"
          style={{ textDecoration: "underline" }}
        >
          Sezai Öztürk
        </Text>
      </Text>
    </div>
  );
};
export default Footer;
