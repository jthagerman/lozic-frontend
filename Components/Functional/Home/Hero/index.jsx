import {
  Container,
  Image,
  Overlay,
  Wrapper,
  Text,
  Orange,
  Sale,
  Row,
  Message,
} from "Components/Styled/Home/Hero";
import HeroImage from "public/images/icons/Home/hero.png";
import Button from "Components/Functional/Common/Inputs/Button/Button";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Image loading="lazy" src={HeroImage.src}></Image>
        <Overlay>
          <Text>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis sapian_2
            </span>

            <Button>Explore</Button>
          </Text>
        </Overlay>
      </Wrapper>
      <Row>
        <Sale>
          <Orange>10$</Orange>On Sale!
        </Sale>
        <Message>
          We provide services that is very satasifying to customers, has many
          products and needs that you need from
        </Message>
      </Row>
    </Container>
  );
};

export default Hero;
