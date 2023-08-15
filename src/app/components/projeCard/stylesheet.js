import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      position: "relative",
      borderRadius: 10,
      display: "flex",
      height: 350,
      width: 350,
      "&:active": {
        transform: "translateY(2px)",
        transition: "transform 0.1s",
      },
      "&:hover > div > div ": {
        visibility: "visible",
      },
    },
    content: {
      backdropFilter: "blur(3px)",
      position: "relative",
      display: "flex",
      height: "100%",
      width: "100%",
    },
    filter: {
      backgroundColor: "rgba(0,0,0,0.9)",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      visibility: "hidden",
      textAlign: "center",
      borderRadius: 10,
      padding: "1rem",
      display: "flex",
      gap: "0.5rem",
      bottom: 0,
      right: 0,
      left: 0,
      top: 0,
    },
    image: {
      borderRadius: 10,
      height: "100%",
      width: "100%",
    },
    "@media screen and (max-width:1300px)": {
      container: {
        width: "260px",
        height: "260px",
      },
    },
    "@media screen and (max-width:1030px)": {
      container: {
        width: "400px",
        height: "400px",
      },
    },
    "@media screen and (max-width:920px)": {
      container: {
        width: "300px",
        height: "300px",
      },
    },
    "@media screen and (max-width:750px)": {
      container: {
        width: "270px",
        height: "270px",
      },
    },
    "@media screen and (max-width:660px)": {
      container: {
        width: "100%",
        height: "100%",
      },
    },
  },
  { name: "Component-ProjeCard" }
);
export default useStyle;
