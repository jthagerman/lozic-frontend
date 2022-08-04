import {
  Container,
  Title,
  Wrapper,
  Paragraph,
} from "Components/Styled/Product/Overview/Description";

const Description = ({ title, description }) => {
  const formmated = description.split("/\n");
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        {formmated.map((el, index) => {
          return <Paragraph key={index}>{el}</Paragraph>;
        })}
      </Wrapper>
    </Container>
  );
};

export default Description;
