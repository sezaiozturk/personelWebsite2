import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";
import Menu from "../menu";
import { useNavigate } from "react-router-dom";
import mobileMenuController from "../mobileMenu/events";
import MobileMenu from "../mobileMenu";

const Header = ({ menuData }) => {
  const { activeLocale, switchLocale } = useNCoreLocalization();
  const { colors, activeTheme, switchTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div
          className={classes.logoContainer}
          onClick={() => {
            navigate("/");
            window.location.replace("#");
          }}
        >
          <span>SEZAİ</span>
        </div>
        <Menu data={menuData} />
        <MobileMenu data={menuData} />
        <div className={classes.themeContainer}>
          <div
            className={classes.hamburger}
            onClick={() => {
              mobileMenuController.emit("setIsActive");
            }}
          >
            <div />
            <div />
            <div />
          </div>
          <div
            onClick={() => {
              switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
          >
            <i
              className="fa-solid fa-globe fa-2xl"
              style={{ color: colors.black }}
            ></i>
          </div>
          <div
            onClick={() => {
              switchTheme(activeTheme === "light" ? "dark" : "light");
            }}
          >
            <i
              className="fa-solid fa-moon fa-2xl"
              style={{ color: colors.black }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
