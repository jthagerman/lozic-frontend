import { Check, Box } from "Components/Styled/Common/Inputs/Button/Checkbox";
import { useState } from "react";
const Checkbox = ({
  text,
  fontSize,
  padding,
  margin,
  labelMarginLeft,
  quanity,
  checked = false,
  callback = () => {
    return "";
  },
}) => {
  const [isChecked, setChecked] = useState(() => checked);
  return (
    <div>
      <Box
        padding={padding}
        margin={margin}
        labelMarginLeft={labelMarginLeft}
        fontSize={fontSize}
      >
        <Check
          checked={isChecked}
          onClick={() => {
            callback();
            setChecked(!isChecked);
          }}
        ></Check>
        <label>
          {text}
          <span>{quanity && "(" + quanity + ")"}</span>
        </label>
      </Box>
    </div>
  );
};

export default Checkbox;
