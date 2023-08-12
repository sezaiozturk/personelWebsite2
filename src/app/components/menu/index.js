import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const Menu = ({ data }) => {
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const selectedSectionName = window.location.href.split("/")[3];

  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            style={
              selectedSectionName === item.path
                ? { color: colors.primary }
                : null
            }
            onClick={() => {}}
          >
            {localize(item.key)}
          </a>
        );
      })}
    </div>
  );
};
export default Menu;
