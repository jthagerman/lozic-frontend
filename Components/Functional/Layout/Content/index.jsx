import { Container } from "Components/Styled/Layout/Content";

const Content = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default Content;
