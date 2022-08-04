import shoppingCart from "public/images/icons/cart.svg";

import { Container } from "Components/Styled/Common/Inputs/ShoppingCart";

const ShoppingCart = ({ height, width, selected, callback }) => {
  return (
    <Container
      height={height}
      width={width}
      src={shoppingCart.src}
      alt="shop"
    ></Container>
  );
};

export default ShoppingCart;
