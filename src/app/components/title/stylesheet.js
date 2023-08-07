import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.primary,
      padding: "2px 4px",
    },
  },
  { name: "Component-Title" }
);
export default useStyle;
