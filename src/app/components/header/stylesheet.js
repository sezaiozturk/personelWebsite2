import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.secondary,
      borderBottomColor: ({ color }) => color.gray200,
      justifyContent: "space-between",
      borderBottom: "1px solid",
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
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      gap: "2rem",
      "& > div": {
        backgroundColor: "transparent",
        border: "none",
        padding: "0.5rem",
        ...clickEvent(),
      },
      "& ul": {
        display: "flex",
      },
    },
    hamburger: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "none",
      gap: 3,
      "& div": {
        backgroundColor: ({ color }) => color.black,
        width: 20,
        height: 3,
      },
      "@media screen and (max-width:768px)": {
        display: "flex",
      },
    },
  },
  {
    name: "Component-Header",
  }
);
export default useStyle;
