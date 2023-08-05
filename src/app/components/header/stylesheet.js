import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.secondary,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 8rem",
      position: "fixed",
      display: "flex",
      right: 0,
      left: 0,
      top: 0,
    },
    logoContainer: {
      ...clickEvent(),
      "& span": {
        fontFamily: "poppins-bold",
        fontSize: "3rem",
        letterSpacing: 1,
      },
    },
    menuContainer: {},
    themeContainer: {
      display: "flex",
      gap: "4rem",
      "& button": {
        backgroundColor: "transparent",
        border: "none",
        ...clickEvent(),
      },
      "& ul": {
        display: "flex",
      },
    },
  },
  {
    name: "Header-Component",
  }
);
export default useStyle;
