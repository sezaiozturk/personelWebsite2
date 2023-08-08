import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      flexDirection: "column",
      display: "flex",
      width: "48%",
    },
    header: {
      justifyContent: "space-between",
      display: "flex",
      padding: "1rem 0",
    },
    bar: {
      borderRadius: 5,
      display: "flex",
      "& div:nth-child(1)": {
        backgroundColor: ({ color }) => color.primary,
        height: "0.8rem",
        borderRadius: "0.5rem 0 0 0.5rem",
        flex: ({ parcent }) => parcent,
        display: "flex",
      },
      "& div:nth-child(2)": {
        backgroundColor: ({ color }) => color.gray,
        height: "0.8rem",
        borderRadius: "0 0.5rem 0.5rem 0",
        flex: ({ parcent }) => 100 - parcent,
        display: "flex",
      },
    },
  },
  { name: "Component-SkillBar" }
);
export default useStyle;
