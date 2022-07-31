import {
  Container,
  Answer,
  Question,
  LargeQ,
} from "Components/Styled/Home/FAQs/FAQCard";
const FAQCard = ({ question, answer }) => {
  if (!question) return null;
  return (
    <Container>
      <Question>
        <LargeQ>Q/</LargeQ>
        {question}
      </Question>
      <Answer>{answer}</Answer>
    </Container>
  );
};

export default FAQCard;
