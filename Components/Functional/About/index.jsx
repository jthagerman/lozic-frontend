import Team from "./Team";
import FeatureCards from "./FeatureCards";
import Work from "./Work";
import { Container } from "Components/Styled/About";

const About = () => {
  return (
    <Container>
      <Work />
      <FeatureCards />
      <Team></Team>
    </Container>
  );
};

export default About;
