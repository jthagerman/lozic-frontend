import { Button as Btn } from "Components/Styled/Common/Inputs/Button";
const Button = ({ text, color, width, padding, children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;
