import { Container } from "Components/Styled/Shop/Navigation";
import { useState } from "react";
import Box from "./Box";
import Arrow from "./Arrow";

const Navigation = ({ pageNumber = 0, maxPages = 40, callback }) => {
  const [index, setIndex] = useState(() => 1);

  if (maxPages <= 1) return null;
  let a = [1, 2, 3, 4, 5];
  return (
    <Container>
      <Arrow direction={"left"} locked={index === 1 ? true : false} />
      {a.map((el, ind) => {
        return (
          <Box
            key={ind}
            selected={el === index}
            value={el}
            callback={() => {}}
          />
        );
      })}
      <Arrow direction={"right"} locked={index >= maxPages - 1} />
    </Container>
  );
};
export default Navigation;
