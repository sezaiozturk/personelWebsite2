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
    contentRight: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 6rem",
      display: "flex",
      gap: "2rem",
      "& div": {
        backgroundColor: ({ color }) => color.primary,
        borderRadius: "50%",
        height: "125px",
        width: "125px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& span:nth-child(1)": {
        fontSize: "15rem",
        display: "block",
        width: "30rem",
        zIndex: 1,
      },
      "& span:nth-child(2)": {
        fontSize: "3rem",
        display: "block",
      },
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
        padding: "0 4rem",
        gap: "2rem",
        "& div": {
          height: "100px",
          width: "100px",
        },
        "& span:nth-child(1)": {
          fontSize: "14rem",
          width: "20rem",
        },
        "& span:nth-child(2)": {
          fontSize: "2.5rem",
        },
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
        flexDirection: "column",
        gap: "5rem",
      },
      contentRight: {
        "& div": {
          height: "100px",
          width: "100px",
        },
        "& span:nth-child(1)": {
          fontSize: "12rem",
          width: "20rem",
        },
        "& span:nth-child(2)": {
          fontSize: "2.2rem",
        },
      },
      contact: {
        flexWrap: "wrap",
        "& div": {
          width: "50%",
          margin: "2rem 0",
        },
      },
    },
  },
  { name: "Section-About" }
);
export default useStyle;
