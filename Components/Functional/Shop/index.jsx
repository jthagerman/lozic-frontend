import ShopItem from "../Common/Prouducts/ShopCard";
import ProductList from "./ProductList";
import {
  Container,
  Sidebar,
  List,
  Navigation,
} from "Components/Styled/Common/Shop";
import image1 from "public/images/Shop/1.png";
import image2 from "public/images/Shop/2.png";
import image3 from "public/images/Shop/3.png";

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
const list = [...example, ...example, ...example, ...example];

const Shop = () => {
  return (
    <Container>
      <Sidebar />
      <List>
        <ProductList list={list}></ProductList>
        <Navigation></Navigation>
      </List>
    </Container>
  );
};

export default Shop;
