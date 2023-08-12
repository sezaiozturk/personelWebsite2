import { Button, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";
import { useEffect, useRef } from "react";
import mobileMenuController from "./events";

const MobileMenu = ({ data }) => {
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const menuRef = useRef(null);
  const selectedSectionName = window.location.href.split("/")[3];

  useEffect(() => {
    mobileMenuController.addEventListener("setIsActive", onActiveChanged);
    return () => {
      mobileMenuController.removeEventListener("setIsActive", onActiveChanged);
    };
  }, []);

  const onActiveChanged = ({ state, payload }) => {
    if (state.isActive) {
      menuRef.current.classList.add("isActive");
    } else {
      menuRef.current.classList.remove("isActive");
    }
  };
  return (
    <div className={classes.container} ref={menuRef}>
      {data.map((item, index) => {
        return (
          <div key={`div-${index}`}>
            <a
              key={index}
              href={`#${item.key}`}
              style={
                selectedSectionName === item.path
                  ? { color: colors.primary }
                  : null
              }
              onClick={() => {
                mobileMenuController.emit("setIsActive");
              }}
            >
              {localize(item.key)}
            </a>
            {index < 4 ? (
              <div className={classes.seperator} key={`s-${index}`} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default MobileMenu;
