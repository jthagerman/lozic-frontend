import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import LargeShopCard from "Components/Functional/Common/Prouducts/ShopCard/largeShopCard";
import image1 from "public/images/Shop/6.png";
import Button from "Components/Functional/Common/Inputs/Button/Button";

import image2 from "public/images/Shop/4.png";
import image3 from "public/images/Shop/5.png";

import { List, ButtonWrapper } from "Components/Styled/Product/Related";

const Related = () => {
  const example = [
    {
      like: false,
      image: image1.src,
      price: 100.23,
      originalPrice: 190.23,
      salePercent: 10,
      category: "Car Parts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sapien",
      link: "shop/product",
    },
    {
      like: true,
      image: image2.src,
      price: 99.99,
      category: "Accessories",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sapien",
      link: "shop/product",
    },
    {
      like: false,
      image: image3.src,
      price: 9.99,
      category: "Accessories",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sapien",
      link: "shop/product",
    },
  ];
  const list = [...example, ...example];
  return (
    <div>
      <TextHeader
        padding="50px 0px 20px 0px"
        title="Related Products"
        subtitle="It's hard to believe that Dronies have replaced birds. Have you got any questions? We got answers."
      ></TextHeader>

      <List>
        {list.map((el, index) => {
          return <LargeShopCard {...el} key={index} />;
        })}
      </List>

      <ButtonWrapper>
        <Button>View More</Button>
      </ButtonWrapper>
    </div>
  );
};

export default Related;
