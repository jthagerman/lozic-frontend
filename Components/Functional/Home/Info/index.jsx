import {
  Container,
  Row,
  Section,
  BigText,
  Plus,
  SubRow,
  Number,
  Text,
  Paragraph,
  Button,
  Explore,
} from "Components/Styled/Home/Info";

const Info = () => {
  return (
    <Container>
      <Row>
        <Section>
          <BigText>Why always us?</BigText>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros lectus
            tellus eget massa donec eleifend. Duis quis porta sed erat orem
            ipsum dolor sit amet, consectetur adipiscin
          </Paragraph>
          <Button href="/">About Us</Button>
        </Section>
        <Section>
          <SubRow>
            <Number>
              <Plus>+</Plus>100
            </Number>
            <Text>Rare and elegant car ready to be delivered</Text>
          </SubRow>
          <SubRow>
            <Number>
              <Plus>+</Plus>200
            </Number>
            <Text>Rare and elegant car ready to be delivered</Text>
          </SubRow>
          <SubRow>
            <Number>
              <Plus>+</Plus>420
            </Number>
            <Text>Rare and elegant car ready to be delivered</Text>
          </SubRow>
        </Section>
      </Row>
      <Row>
        <Section>
          <BigText>PICK THE BEST RARE CARS FOR YOU</BigText>
        </Section>
        <Section>
          <Explore>
            We provide services that is very satasifying to customers, has many
            products and needs that you need from
          </Explore>

          <Button href="/">Explore</Button>
        </Section>
      </Row>
    </Container>
  );
};

export default Info;
