import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      flexDirection: "column",
      display: "flex",
      width: "100%",
      gap: "0.8rem",
    },
    label: {
      color: ({ color }) => color.black,
      fontFamily: "poppins-regular",
      fontSize: 16,
    },
    input: {
      backgroundColor: ({ color, theme }) =>
        theme === "light" ? color.primary : "#1f1f1f",
      borderBottom: "2px solid rgba(0,0,0,0.3)",
      color: ({ color }) => color.black,
      fontFamily: "poppins-medium",
      outline: "none",
      border: "none",
      padding: "0.8rem 0",
      fontSize: 18,
      "&:focus": {
        borderBottom: "2px solid rgba(0,0,0,1)",
      },
    },
  },
  { name: "Component-TextInput" }
);
export default useStyle;
