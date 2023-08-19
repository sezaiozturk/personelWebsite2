import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const TextInput = ({
  id,
  title,
  type = "text",
  onChangeText,
  value,
  error,
}) => {
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
      <input
        className={classes.input}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChangeText}
      />
    </div>
  );
};
export default TextInput;

/**
 *
 *
 *
 */
