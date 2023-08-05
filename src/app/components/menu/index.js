import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const Menu = ({ data }) => {
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        return <a key={index}>{localize(item.key)}</a>;
      })}
    </div>
  );
};
export default Menu;
