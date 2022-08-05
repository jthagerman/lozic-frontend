import { Container, Box } from "Components/Styled/Product/Details";
import Information from "./Information";
import ImageCarousel from "./ImageCarousel";

const Details = () => {
  return (
    <Container>
      <Box>
        <ImageCarousel />
      </Box>
      <Box>
        <Information />
      </Box>
    </Container>
  );
};

export default Details;
