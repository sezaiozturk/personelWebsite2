import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "space-between",
      padding: "7rem 10rem",
      display: "flex",
      backgroundColor: "#121418",
      "@media screen and (max-width:1000px)": {
        flexDirection: "column",
        justifyContent: "center",
        padding: "7rem 3rem",
        textAlign: "center",
        gap: "1.5rem",
      },
    },
  },
  {
    name: "Component-Footer",
  }
);
export default useStyle;
