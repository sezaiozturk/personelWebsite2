import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    "@global": {
      "*": {
        transition: "all 0s !important",
      },
    },
    container: {
      position: "relative",
      display: "flex",
      height: 350,
      width: 350,
      "&:hover": {
        ...clickEvent(),
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
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      visibility: "hidden",
      textAlign: "center",
      padding: "1rem",
      display: "flex",
      gap: "0.5rem",
      bottom: 0,
      right: 0,
      left: 0,
      top: 0,
    },
    image: {
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
