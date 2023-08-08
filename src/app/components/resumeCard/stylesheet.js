import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      borderColor: ({ color }) => color.primary,
      borderLeft: "2px solid",
      flexDirection: "column",
      display: "flex",
      "& div:nth-child(1)": {
        padding: "0 3rem 0 1rem",
        flexDirection: "column",
        display: "flex",
        gap: "1.5rem",
      },
    },
    seperator: {
      backgroundColor: ({ color }) => color.gray,
      margin: "2.5rem 5rem 2.5rem 2rem",
      height: 1,
    },
  },
  { name: "Component-ResumeCard" }
);
export default useStyle;
