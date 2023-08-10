import { Text, useNCoreTheme } from "ncore-web";
import useStyle from "./stylesheet";

const MultiTextInput = ({ title, id, onChangeText, value }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
      <textarea
        className={classes.input}
        id={id}
        onChange={(event) => {
          if (onChangeText) onChangeText(event.target.value);
        }}
      >
        {value}
      </textarea>
    </div>
  );
};
export default MultiTextInput;
