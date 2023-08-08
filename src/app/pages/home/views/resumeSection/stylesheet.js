import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "center",
      flexDirection: "column",
      padding: "5rem 0rem",
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
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      "& div": {
        display: "flex",
        width: "90%",
      },
    },
    cell: {
      flexDirection: "column",
      display: "flex",
      flex: 1,
    },
    hideContainer: {
      position: "absolute",
      bottom: 0,
      backgroundColor: "white",
      height: "2.5rem",
    },
    skillsContainer: {
      flexDirection: "column",
      display: "flex",
      width: "90%",
    },
    skillsContent: {
      flexDirection: "column",
      display: "flex",
      gap: "2rem",
      "& div": {
        justifyContent: "space-between",
        display: "flex",
      },
    },
  },
  { name: "Section-Resume" }
);
export default useStyle;
