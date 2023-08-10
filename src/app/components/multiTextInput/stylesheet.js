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
      fontFamily: "poppins-regular",
      fontSize: 16,
    },
    input: {
      backgroundColor: ({ color }) => color.primary,
      borderBottom: "2px solid rgba(0,0,0,0.3)",
      fontFamily: "poppins-medium",
      padding: "0.8rem 0",
      minHeight: "12rem",
      resize: "vertical",
      outline: "none",
      border: "none",
      fontSize: 18,
      "&:focus": {
        borderBottom: "2px solid rgba(0,0,0,1)",
      },
    },
  },
  { name: "Component-TextInput" }
);
export default useStyle;
