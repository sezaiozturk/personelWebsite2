import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    container: {
      backgroundImage: "url(/assets/images/hire-background.jpg)",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      alignItems: "center",
      display: "flex",
    },
    filter: {
      backgroundColor: "rgba(0,0,0,0.75)",
      justifyContent: "center",
      position: "relative",
      alignItems: "center",
      padding: "15rem 0",
      display: "flex",
      height: "100%",
      width: "100%",
    },
    content: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "0 2rem",
      display: "flex",
      gap: "5rem",
    },
  },
  { name: "Section-Hire" }
);
export default useStyle;
