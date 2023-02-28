import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import CardList from "Components/Functional/Common/Prouducts/CardList";

import { Container } from "Components/Styled/Home/Featured";

const Featured = () => {
  return (
    <Container>
      <TextHeader
        padding="30px 0px 30px 0px"
        title="Latest LOZIC News & Achievements"
        subtitle="Stay up to date with the latest and greatest from LOZIC Motorsports."
      ></TextHeader>
      <CardList />
    </Container>
  );
};

export default Featured;
