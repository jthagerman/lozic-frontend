import Checkbox from "Components/Functional/Common/Inputs/Checkbox";

import {
  Container,
  Options,
  Title,
} from "Components/Styled/Product/Details/Information/Inputs";

const Inputs = ({
  direction = "column",
  radio = false,
  title = "",
  flex = 1,
}) => {
  return (
    <Container direction={direction} flex={flex}>
      <Title>{title}</Title>
      <Options direction={direction}>
        <Checkbox
          text={"Checkbox"}
          margin="10px"
          fontSize="16px"
          radioButton={radio}
          labelMarginLeft="7px"
        ></Checkbox>
        <Checkbox
          text={"Checkbox"}
          margin="10px"
          fontSize="16px"
          radioButton={radio}
          labelMarginLeft="7px"
        ></Checkbox>
        <Checkbox
          text={"Checkbox"}
          margin="10px"
          fontSize="16px"
          radioButton={radio}
          labelMarginLeft="7px"
        ></Checkbox>
      </Options>
    </Container>
  );
};

export default Inputs;
