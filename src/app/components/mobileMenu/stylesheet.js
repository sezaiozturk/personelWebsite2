import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.secondary,
      transform: "translateX(-50%)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      textAlign: "center",
      position: "fixed",
      padding: "1.5rem",
      display: "none",
      boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
      width: "100%",
      zIndex: 10,
      left: "50%",
      top: 65,
      "&.isActive": {
        display: "flex",
      },
      "& div": {
        width: "100%",
      },
      "& a": {
        color: ({ color }) => color.black,
        fontFamily: "poppins-semibold",
        textTransform: "uppercase",
        flexDirection: "column",
        textDecoration: "none",
        position: "relative",
        textAlign: "start",
        fontSize: "1.6rem",
        padding: "1rem 0",
        display: "flex",
        width: "100%",
      },
      "& a:hover": {
        cursor: "pointer",
        color: ({ color }) => color.primary,
      },
    },
    seperator: {
      backgroundColor: ({ color }) => color.gray200,
      width: "100%",
      height: 1,
    },
  },
  {
    name: "Component-MobileMenu",
  }
);
export default useStyle;
