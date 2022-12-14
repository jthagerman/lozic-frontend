import {
  Container,
  Checkout,
  Inputs as InputsWrap,
} from "Components/Styled/Product/Details/Information";
import Header from "Components/Functional/Product/Details/Information/Header";
import Button from "Components/Functional/Common/Inputs/Button/Button";
import Inputs from "./Inputs";
import Quanity from "./Quantity";
const Information = () => {
  const example = {
    title: "15 Sticker Pack",
    price: 4.99,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu, nulla in tincidunt aliquam nulla arcu molestie. Nunc scelerisque ullamcorper fringilla ut aliquam enim. Vel vel risus risus in ligula egestas. Risus, quisque adipiscing bibendum viverra non mattis molestie pulvinar.`,
  };
  return (
    <Container>
      <Header {...example} />

      <InputsWrap>
        <Inputs title={"Sizes"} />
        <Inputs radio={true} direction={"row"} title={"Options"} flex={2} />
      </InputsWrap>

      <Checkout>
        <Quanity />
        <Button width="300px" height="60px">
          Checkout
        </Button>
      </Checkout>
    </Container>
  );
};

export default Information;
