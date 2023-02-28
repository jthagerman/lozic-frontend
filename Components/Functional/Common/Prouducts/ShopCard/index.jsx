import { PriceWrapper } from "Components/Styled/Common/Products/CardList/ShopItemCard";
import {
  Container,
  Image,
  Category,
  Description,
  Price,
  Sale,
  SaleBanner,
  ImageWrapper,
  Icons,
  Wrapper,
} from "Components/Styled/Common/Products/CardList/ShopItemCard";
import Heart from "Components/Functional/Common/Inputs/Heart/index.jsx";
import ShoppingCart from "../../Inputs/ShoppingCart";

const ShopItemCard = ({
  like,
  image,
  price,
  originalPrice,
  category,
  salePercent,
  description,
  link,
}) => {
  return (
    <Container href={link}>
      <ImageWrapper>
        {image && <Image loading="lazy" alt="description" src={image} />}
        {salePercent && <SaleBanner>-{salePercent}%</SaleBanner>}
        {/*<Icons>*/}
        {/*  <Heart selected={like} />*/}
        {/*  <ShoppingCart />*/}
        {/*</Icons>*/}
      </ImageWrapper>
      <Wrapper>
        {category && <Category>{category.toUpperCase()}</Category>}
        {description && <Description>{description}</Description>}

        <PriceWrapper>
          <Price>${price}</Price>
          {originalPrice && <Sale>${originalPrice}</Sale>}
        </PriceWrapper>
      </Wrapper>
    </Container>
  );
};

export default ShopItemCard;
