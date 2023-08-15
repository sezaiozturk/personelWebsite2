import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "center",
      flexDirection: "column",
      padding: "10rem 6%",
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
      gap: "1rem",
    },
    content: {
      justifyContent: "center",
      alignItems: "flex-start",
      display: "flex",
      width: "100%",
    },
    cell: {
      flexDirection: "column",
      position: "relative",
      display: "flex",
      flex: 1,
    },
    hideContainer: {
      backgroundColor: ({ color }) => color.secondary,
      position: "absolute",
      height: "2.5rem",
      width: "100%",
      bottom: 0,
    },
    skillsContainer: {
      flexDirection: "column",
      display: "flex",
      width: "100%",
      gap: "2rem",
    },
    skillsContent: {
      flexDirection: "column",
      display: "flex",
      gap: "2rem",
    },
    row: {
      justifyContent: "space-between",
      display: "flex",
      gap: "4%",
    },
    "@media screen and (max-width:1000px)": {
      content: {
        flexDirection: "column",
      },
    },
    "@media screen and (max-width:768px)": {
      container: {
        padding: "7rem 4%",
      },
      skillsContent: {
        gap: "1rem",
      },
      row: {
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        gap: "1rem",
      },
    },
  },
  { name: "Section-Resume" }
);
export default useStyle;
