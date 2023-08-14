import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color, theme }) =>
        theme === "light" ? color.primary : "transparent",
      padding: "2px 4px",
    },
  },
  { name: "Component-Title" }
);
export default useStyle;
