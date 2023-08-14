import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    "@global": {
      "@keyframes typing": {
        "0%": { width: 0 },
        "30%": { width: "100%" },
        "70%": { width: "100%" },
        "100%": { width: 0 },
      },
      "@keyframes blink-caret": {
        from: {
          borderColor: "transparent",
        },
        to: { borderColor: "transparent" },
        "50%": { borderColor: "white" },
      },
      "@keyframes scroolAnim": {
        from: {
          transform: "translateY(0px)",
        },
        to: { transform: "translateY(15px)" },
      },
    },
    container: {
      height: "100vh",
    },
    background: {
      backgroundImage: "url(/assets/images/welcome-background.jpg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
      width: "100%",
    },
    filter: {
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      display: "flex",
      height: "100%",
      width: "100%",
    },
    contentContainer: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "5%",
      display: "flex",
      padding: "2rem",
      gap: "2.5rem",
      "& span": {
        letterSpacing: "0.5rem",
        color: "white",
        fontSize: 40,
        "@media screen and (max-width:950px)": {
          fontSize: 25,
        },
        "@media screen and (max-width:620px)": {
          fontSize: 20,
        },
      },
    },
    typeWriter: {
      animation:
        "typing 4s steps(40, end) infinite,blink-caret .75s step-end infinite",
      borderRight: ".9em solid",
      letterSpacing: ".15em",
      whiteSpace: "nowrap",
      margin: "0 auto",
      overflow: "hidden",
      color: "white",
      "& span": {
        fontSize: 114,
        color: "white",
        fontFamily: "poppins-semibold",
        "@media screen and (max-width:950px)": {
          fontSize: 90,
        },
        "@media screen and (max-width:620px)": {
          fontSize: 48,
        },
      },
    },
    scrool: {
      animation: "scroolAnim 1.2s ease infinite",
      backgroundColor: "transparent",
      transform: "translate(-50%)",
      position: "absolute",
      border: "none",
      color: "white",
      bottom: "5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  { name: "Section-Welcome" }
);
export default useStyle;
