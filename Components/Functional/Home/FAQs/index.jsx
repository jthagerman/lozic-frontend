import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import { Container, List } from "Components/Styled/Home/FAQs";
import FAQCard from "./FAQCard";

export const FAQs = () => {
  const faqs = [
    {
      question: "Can we chat with the team in any social media",
      answer:
        "It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers.",
    },
    {
      question: "Can we chat with the team in any social media",
      answer:
        "It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers.",
    },
    {
      question: "Can we chat with the team in any social media",
      answer:
        "It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers.",
    },
    {
      question: "Can we chat with the team in any social media",
      answer:
        "It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers.",
    },
  ];
  return (
    <Container>
      <TextHeader
        padding="50px 0px 20px 0px"
        title="Looking for Anwers?"
        subtitle="It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers."
      ></TextHeader>

      <List>
        {faqs.map((element, index) => {
          return (
            <FAQCard
              key={index}
              question={element.question}
              answer={element.answer}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default FAQs;
