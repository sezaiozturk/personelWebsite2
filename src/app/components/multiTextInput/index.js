import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const MultiTextInput = ({ title, id, onChangeText }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors, theme: activeTheme });
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <textarea
        className={classes.input}
        id={id}
        name={id}
        onChange={onChangeText}
      ></textarea>
    </div>
  );
};
export default MultiTextInput;
