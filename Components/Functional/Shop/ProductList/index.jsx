import ShopItemCard from "Components/Functional/Common/Prouducts/ShopCard";
import { List } from "Components/Styled/Common/Shop/ProductList";
import image1 from "public/images/Shop/1.png";
import image2 from "public/images/Shop/2.png";
import image3 from "public/images/Shop/3.png";

const ProductList = ({ list }) => {
  return (
    <div>
      <List>
        {list.map((el, index) => (
          <ShopItemCard {...el} key={index} />
        ))}
      </List>
    </div>
  );
};

export default ProductList;
