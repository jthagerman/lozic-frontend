import { Container } from "Components/Styled/Shop/Navigation/Box";

const Box = ({ selected = false, value, callback }) => {
  return <Container selected={selected}>{value}</Container>;
};

export default Box;
