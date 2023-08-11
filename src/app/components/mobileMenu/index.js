import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";
import { useEffect, useRef } from "react";
import mobileMenuController from "./events";

const MobileMenu = ({ data }) => {
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const menuRef = useRef(null);

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
          <>
            <a
              key={index}
              href={`#${item.key}`}
              onClick={() => {
                mobileMenuController.emit("setIsActive");
              }}
            >
              {localize(item.key)}
            </a>
            {index < 4 ? <div className={classes.seperator} /> : null}
          </>
        );
      })}
    </div>
  );
};
export default MobileMenu;
