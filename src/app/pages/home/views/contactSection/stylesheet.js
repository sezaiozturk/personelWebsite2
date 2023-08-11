import { createUseStyles } from "react-jss";
import { clickEvent, tooltip, tooltipText } from "../../../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      backgroundColor: ({ color }) => color.primary,
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "center",
      padding: "10rem 6%",
      display: "flex",
      height: "100%",
      gap: "5rem",
    },
    content: {
      justifyContent: "center",
      alignItems: "flex-start",
      display: "flex",
      width: "100%",
    },
    cell: {
      flexDirection: "column",
      position: "relative",
      display: "flex",
      gap: "5rem",
      flex: 1,
    },
    statement: {
      paddingRight: "12rem",
    },
    contactContainer: {
      flexDirection: "column",
      display: "flex",
      gap: "1.5rem",
      "& div": {
        flexDirection: "column",
        display: "flex",
        gap: "1rem",
      },
    },
    social: {
      display: "flex",
      gap: "3rem",
      "& i": {
        color: ({ color }) => color.black,
        ...clickEvent(),
      },
      "& i:nth-child(1):hover": {
        color: "#24292E",
      },
      "& i:nth-child(2):hover": {
        color: "#0B65C2",
      },
      "& i:nth-child(3):hover": {
        color: "#F7075A",
      },
    },
    form: {
      flexDirection: "column",
      alignItems: "flex-start",
      display: "flex",
      gap: "3rem",
    },
    tooltip: {
      ...tooltip(),
    },
    tooltiptext: {
      ...tooltipText(),
    },
    "@media screen and (max-width:1030px)": {
      container: {
        padding: "10rem 10%",
      },
      content: {
        flexDirection: "column",
      },
      cell: {
        paddingBottom: "5rem",
        textAlign: "center",
        width: "100%",
      },
      statement: {
        padding: 0,
      },
      social: {
        justifyContent: "center",
      },
      form: {
        alignItems: "center",
      },
    },
  },
  { name: "Section-Contact" }
);
export default useStyle;
