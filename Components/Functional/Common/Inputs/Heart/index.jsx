import heartFilled from "public/images/icons/heartFilled.svg";
import heart from "public/images/icons/heart.svg";
import { useState } from "react";

import { Container } from "Components/Styled/Common/Inputs/Heart";

const Heart = ({ height, width, selected, callback }) => {
  const [state, setState] = useState(() => selected);

  return (
    <Container
      height={height}
      width={width}
      onClick={() => setState(!state)}
      src={(state ? heart : heartFilled).src}
      alt="like"
    ></Container>
  );
};

export default Heart;
