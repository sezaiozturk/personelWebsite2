import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";
import Menu from "../menu";
import { AiOutlineGlobal } from "react-icons/ai";
const Header = ({ menuData }) => {
  const { activeLocale, switchLocale } = useNCoreLocalization();
  const { colors, activeTheme, switchTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <span>SEZAİ</span>
      </div>
      <div className={classes.menuContainer}>
        <Menu data={menuData} />
      </div>
      <div className={classes.themeContainer}>
        <button
          onClick={() => {
            switchLocale(activeLocale === "en" ? "tr" : "en");
          }}
        >
          <i class="fa-solid fa-globe fa-2x"></i>
        </button>
        <button
          onClick={() => {
            switchTheme(activeTheme === "light" ? "dark" : "light");
          }}
        >
          <i class="fa-solid fa-moon fa-2x"></i>
        </button>
      </div>
    </div>
  );
};
export default Header;
