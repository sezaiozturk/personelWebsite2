import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const MultiTextInput = ({ title, id, onChangeText, value, error }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors, theme: activeTheme });
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        {error && <span>*</span>}
        <label className={classes.label} htmlFor={id}>
          {title}
        </label>
      </div>
      <textarea
        className={classes.input}
        id={id}
        name={id}
        onChange={onChangeText}
        value={value}
      ></textarea>
    </div>
  );
};
export default MultiTextInput;
