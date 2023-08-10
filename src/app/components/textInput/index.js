import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const TextInput = ({ title, id, type = "text", onChangeText }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <input
        className={classes.input}
        id={id}
        type={type}
        onChange={(event) => {
          if (onChangeText) onChangeText(event.target.value);
        }}
      />
    </div>
  );
};
export default TextInput;
