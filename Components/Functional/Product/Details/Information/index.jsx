import { Container } from "Components/Styled/Product/Details/Information";
import Header from "Components/Functional/Product/Details/Information/Header";
const Information = () => {
  const example = {
    title: "15 Sticker Pack",
    price: 4.99,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu, nulla in tincidunt aliquam nulla arcu molestie. Nunc scelerisque ullamcorper fringilla ut aliquam enim. Vel vel risus risus in ligula egestas. Risus, quisque adipiscing bibendum viverra non mattis molestie pulvinar.`,
  };
  return (
    <Container>
      <Header {...example} />
    </Container>
  );
};

export default Information;
