import { Container } from "Components/Styled/About/FeatureCard";
import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import FeatureCard from "./FeatureCard";
import engine from "public/images/About/engine.png";
import tuning from "public/images/About/tuning.png";

const FeatureCards = () => {
  return (
    <Container>
      <TextHeader
        padding="0px 0px 50px 0px"
        title="Some of our features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros lectus tellus eget massa donec eleifend. Duis quis porta sed erat."
      ></TextHeader>

      <FeatureCard
        title="Tuning to perfection"
        description="The initial stage of the product development process begins by
          generating new product ideas. This is the product innovation stage,
          where you brainstorm product concepts based on customer needs, concept
          testing, and market research."
        bullets={[
          "Target market",
          "Existing products",
          "Functionality",
          "SWOT analysis",
          "SCAMPER method",
        ]}
        image={tuning.src}
        direction="left"
      ></FeatureCard>
      <FeatureCard
        title="Best Seller!"
        description="Once you’ve completed the business case and discussed your target market and product functionality, it’s time to define the product. This is also referred to as scoping or concept development, and focuses on refining the product strategy. "
        bullets={[
          "Business analysis",
          "Value proposition",
          "Success metrics",
          "Marketing strategy",
        ]}
        image={engine.src}
        direction="right"
      ></FeatureCard>
    </Container>
  );
};

export default FeatureCards;
