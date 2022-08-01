import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import CardList from "Components/Functional/Common/Prouducts/CardList";

import { Container } from "Components/Styled/Home/Featured";

const Featured = () => {
  return (
    <Container>
      <TextHeader
        title="Innovation that will shape how we work "
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros lectus tellus eget massa donec eleifend. Duis quis porta sed erat."
      ></TextHeader>
      <CardList />
    </Container>
  );
};

export default Featured;
