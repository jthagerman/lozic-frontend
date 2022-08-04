import { Container, Box } from "Components/Styled/Product/Details";
import Information from "./Information";

const Details = () => {
  return (
    <Container>
      <Box>
        <div>image</div>
      </Box>
      <Box>
        <Information />
      </Box>
    </Container>
  );
};

export default Details;
