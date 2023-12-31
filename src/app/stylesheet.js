import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    "@global": {
      "@font-face": [
        {
          fontFamily: "poppins-bold",
          src: "url('/assets/fonts/Poppins-Bold.ttf')",
        },
        {
          fontFamily: "poppins-black",
          src: "url('/assets/fonts/Poppins-Black.ttf')",
        },
        {
          fontFamily: "poppins-extra-bold",
          src: "url('/assets/fonts/Poppins-ExtraBold.ttf')",
        },
        {
          fontFamily: "poppins-extra-light",
          src: "url('/assets/fonts/Poppins-ExtraLight.ttf')",
        },
        {
          fontFamily: "poppins-medium",
          src: "url('/assets/fonts/Poppins-Medium.ttf')",
        },
        {
          fontFamily: "poppins-regular",
          src: "url('/assets/fonts/Poppins-Regular.ttf')",
        },
        {
          fontFamily: "poppins-semibold",
          src: "url('/assets/fonts/Poppins-SemiBold.ttf')",
        },
      ],
      "*": {
        textDecoration: "none",
        boxSizing: "border-box",
        transition: "all 0s !important",
        scrollBehavior: "smooth",
      },
      html: {
        fontSize: "62.5%",
        userSelect: "none",
      },
      body: {
        backgroundColor: "black",
        minWidth: 375,
      },
    },
    container: {},
  },
  {
    name: "Global",
  }
);
export default useStyle;
