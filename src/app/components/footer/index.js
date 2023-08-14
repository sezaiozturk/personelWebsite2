import { useNCoreLocalization, useNCoreTheme, Text } from "ncore-web";
import useStyle from "./stylesheet";
const Footer = () => {
  const { activeLocale, switchLocale } = useNCoreLocalization();
  const { colors, activeTheme, switchTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <Text variant="title5" color="text">
        Copyright © 2023{" "}
        <Text
          variant="title5"
          color="primary"
          style={{ textDecoration: "underline" }}
        >
          Sezai
        </Text>
        . All Rights Reserved.
      </Text>
      <Text variant="title5" color="text">
        Designed by{" "}
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
