import { Container } from "Components/Styled/Shop/Navigation";
import { useState } from "react";
import Box from "./Box";
import Arrow from "./Arrow";

const Navigation = ({ pageNumber = 0, maxPages = 5, callback }) => {
  const [index, setIndex] = useState(() => 1);
  const [currentPage, setCurrentPage] = useState(() => 1);

  if (maxPages <= 1) return null;
  let a = [1, 2, 3, 4, 5];

  console.log(currentPage);

  const navigate = (direction) => {
    console.log("cl");
    switch (direction) {
      case "right": {
        if (currentPage <= maxPages) setCurrentPage((prev) => prev + 1);
        break;
      }
      case "left": {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        break;
      }
    }
  };
  return (
    <Container>
      <span onClick={() => navigate("left")}>
        <Arrow direction={"left"} locked={currentPage === 1 ? true : false} />
      </span>

      {a.map((el, ind) => {
        return (
          <Box
            key={ind}
            selected={el === currentPage}
            value={el}
            callback={() => {}}
          />
        );
      })}
      <span onClick={() => navigate("right")}>
        <Arrow direction={"right"} locked={currentPage >= maxPages} />
      </span>
    </Container>
  );
};
export default Navigation;
