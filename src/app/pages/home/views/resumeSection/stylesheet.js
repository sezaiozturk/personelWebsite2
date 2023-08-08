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
      display: "flex",
      width: "90%",
    },
    cell: {
      flexDirection: "column",
      display: "flex",
      flex: 1,
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
