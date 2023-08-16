import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const TextInput = ({ title, id, type = "text", onChangeText }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors, theme: activeTheme });
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <input
        className={classes.input}
        id={id}
        name={id}
        type={type}
        onChange={onChangeText}
      />
    </div>
  );
};
export default TextInput;
