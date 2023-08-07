import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.secondary,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 6rem",
      position: "fixed",
      display: "flex",
      zIndex: 10,
      right: 0,
      left: 0,
      top: 0,
      "@media screen and (max-width:950px)": {
        padding: "1rem 3rem",
      },
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoContainer: {
      ...clickEvent(),
      "& span": {
        fontFamily: "poppins-bold",
        fontSize: "3rem",
        letterSpacing: 1,
      },
    },
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
