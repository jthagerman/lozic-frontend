import { Button as Btn } from "Components/Styled/Common/Inputs/Button";
const Button = ({ text, color, width, padding, children, margin, height }) => {
  return (
    <Btn
      color={color}
      width={width}
      padding={padding}
      margin={margin}
      height={height}
    >
      {children}
    </Btn>
  );
};

export default Button;
