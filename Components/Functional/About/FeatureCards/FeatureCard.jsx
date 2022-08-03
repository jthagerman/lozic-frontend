import {
  Container,
  Box,
  Image,
  Title,
  Description,
  Bullets,
  Item,
} from "Components/Styled/About/FeatureCard/FeatureCard";

const FeatureCard = ({ title, description, bullets, image, direction }) => {
  return (
    <Container direction={direction}>
      <Box>
        {image && (
          <Image src={image} direction={direction} loading="lazy"></Image>
        )}
      </Box>
      <Box>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {bullets && (
          <Bullets>
            {bullets.map((el, index) => {
              return <Item key={index}>{el}</Item>;
            })}
          </Bullets>
        )}
      </Box>
    </Container>
  );
};

export default FeatureCard;
