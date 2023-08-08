import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      display: "flex",
      gap: "4rem",
      "& a": {
        color: ({ color }) => color.black,
        fontFamily: "poppins-semibold",
        textTransform: "uppercase",
        flexDirection: "column",
        position: "relative",
        fontSize: "1.6rem",
        display: "flex",
      },
      "& a::after": {
        borderColor: ({ color }) => color.primary,
        transform: "translate(-50%)",
        border: "1.5px solid",
        position: "absolute",
        visibility: "hidden",
        content: "''",
        left: "50%",
        bottom: -5,
        width: 0,
      },
      "& a:hover": {
        cursor: "pointer",
      },
      "& a:hover::after": {
        transition: "width 0.4s ease",
        visibility: "visible",
        width: "100%",
      },
      "@media screen and (max-width:1200px)": {
        display: "none",
      },
    },
  },
  {
    name: "Component-Menu",
  }
);
export default useStyle;
