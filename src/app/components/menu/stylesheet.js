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
        textDecoration: "none",
        flexDirection: "column",
        position: "relative",
        fontSize: "1.6rem",
        padding: "1rem",
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
        bottom: 2,
        width: 0,
      },
      "& a:hover": {
        cursor: "pointer",
      },
      "& a:hover::after": {
        transition: "width 0.4s ease",
        visibility: "visible",
        width: "80%",
      },
      "@media screen and (max-width:768px)": {
        display: "none",
      },
    },
  },
  {
    name: "Component-Menu",
  }
);
export default useStyle;
