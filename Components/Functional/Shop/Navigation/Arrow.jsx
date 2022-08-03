import left from "public/images/icons/leftArrow.svg";
import right from "public/images/icons/rightArrow.svg";

import { Container, Icon } from "Components/Styled/Shop/Navigation/Arrow";

const Arrow = ({ direction, locked, callback }) => {
  return (
    <Container locked={locked}>
      <Icon
        src={(direction === "left" ? left : right).src}
        locked={locked}
      ></Icon>
    </Container>
  );
};

export default Arrow;
