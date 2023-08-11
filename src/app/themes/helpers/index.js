export const clickEvent = () => {
  return {
    "&:hover": {
      opacity: 0.75,
      cursor: "pointer",
    },
    "&:active": {
      transform: "translateY(2px)",
      transition: "transform 0.1s",
    },
  };
};

export const tooltip = () => {
  return {
    display: "inline-block",
    position: "relative",
    "&:hover span": {
      visibility: "visible",
    },
  };
};
export const tooltipText = () => {
  return {
    transform: "translateX(-50%)",
    backgroundColor: "black",
    visibility: "hidden",
    position: "absolute",
    textAlign: "center",
    marginBottom: "6px",
    padding: "5px 8px",
    borderRadius: 6,
    bottom: "100%",
    color: "#fff",
    fontSize: 14,
    left: "50%",
    zIndex: 1,
    "&::after": {
      borderColor: "black transparent transparent transparent",
      transform: "translateX(-50%)",
      borderStyle: "solid",
      position: "absolute",
      borderWidth: 5,
      content: "''",
      top: "100%",
      left: "50%",
    },
  };
};
