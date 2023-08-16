import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "center",
      flexDirection: "column",
      padding: "5rem 10rem",
      alignItems: "center",
      minHeight: "100vh",
      display: "flex",
      height: "100%",
      gap: "5rem",
    },
    title: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      gap: "1rem",
    },
    content: {
      display: "flex",
    },
    contentLeft: {
      flexDirection: "column",
      display: "flex",
      gap: "1.5rem",
      flex: 3,
    },
    name: {
      position: "relative",
      "&::after": {
        borderColor: ({ color }) => color.primary,
        transform: "translate(-50%)",
        border: "1.5px solid",
        position: "absolute",
        content: "''",
        left: "50%",
        bottom: 2,
        width: "100%",
      },
    },
    contentRight: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "6rem",
      display: "flex",
    },
    profilePhoto: {
      width: 350,
      height: 350,
      borderRadius: 20,
      backgroundOrigin: "center",
      backgroundSize: "center",
    },
    contactContainer: {
      display: "flex",
      width: "100%",
    },
    contact: {
      justifyContent: "space-between",
      display: "flex",
      width: "75%",
      "& div": {
        flexDirection: "column",
        display: "flex",
        gap: "1.2rem",
      },
    },
    "@media screen and (max-width:1285px)": {
      contentRight: {
        paddingLeft: "3rem",
      },
      contact: {
        width: "100%",
      },
    },
    "@media screen and (max-width:950px)": {
      container: {
        padding: "9rem 3rem",
      },
      content: {
        flexDirection: "column-reverse",
        gap: "5rem",
      },
      contentLeft: {
        textAlign: "center",
      },
      contentRight: {
        paddingLeft: 0,
      },
      contact: {
        flexWrap: "wrap",
        "& div": {
          width: "50%",
          margin: "2rem 0",
        },
      },
    },
    "@media screen and (max-width:550px)": {
      profilePhoto: {
        width: 300,
        height: 300,
      },
      contact: {
        flexWrap: "wrap",
        "& div": {
          width: "100%",
        },
      },
    },
  },
  { name: "Section-About" }
);
export default useStyle;
