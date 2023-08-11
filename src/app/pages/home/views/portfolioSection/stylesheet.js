import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "center",
      flexDirection: "column",
      padding: "10rem",
      alignItems: "center",
      minHeight: "100vh",
      display: "flex",
      height: "100%",
      gap: "5rem",
    },
    title: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
    },
    content: {
      justifyContent: "center",
      alignItems: "center",
      padding: "5rem 0",
      flexWrap: "wrap",
      display: "flex",
      width: "100%",
      gap: 25,
    },
    "@media screen and (max-width:1030px)": {
      container: {
        padding: "5rem",
      },
      content: {
        gap: 15,
      },
    },
  },
  { name: "Section-Portfolio" }
);
export default useStyle;
