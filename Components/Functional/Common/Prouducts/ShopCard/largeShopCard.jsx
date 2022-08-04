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
  Pi,
  Cart,
} from "Components/Styled/Common/Products/CardList/ShopItemCard/largeShopItemCard";
import Heart from "Components/Functional/Common/Inputs/Heart/index.jsx";
import ShoppingCart from "../../Inputs/ShoppingCart";

const LargeShopCard = ({
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
    <Container>
      <ImageWrapper>
        {image && <Image loading="lazy" alt="description" src={image} />}
        {salePercent && <SaleBanner>-{salePercent}%</SaleBanner>}
        <Icons>
          <Heart selected={like} height={"24px"} width={"24px"} />
        </Icons>
      </ImageWrapper>
      <Wrapper>
        <Icons>
          <Cart>
            <ShoppingCart height={"24px"} width={"24px"} />
          </Cart>
        </Icons>
        {category && <Category>{category.toUpperCase()}</Category>}
        {description && <Description href={link}>{description}</Description>}

        <PriceWrapper>
          <Pi>
            <Price>${price}</Price>
            {originalPrice && <Sale>${originalPrice}</Sale>}
          </Pi>
        </PriceWrapper>
      </Wrapper>
    </Container>
  );
};

export default LargeShopCard;
