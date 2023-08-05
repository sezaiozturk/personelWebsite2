import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      width: 400,
      height: 4000,
      backgroundColor: "bisque",
    },
  },
  { name: "Welcome-Section" }
);
export default useStyle;
