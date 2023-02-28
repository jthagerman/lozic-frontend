import ShopCard from "./ItemCard";

import { Container, List } from "Components/Styled/Common/Products/CardList";

const CardList = () => {
  let products = [
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
    {
      category: "VEHICLE TUNING",
      image: "https://picsum.photos/400/300",
      link: "/",
      labels: [
        "500+ WHP Stock Turbo Tune!",
        "Unmatched vehicle reliability",
        "Track focused transmission tuning",
      ],
    },
  ];

  return (
    <Container>
      <List>
        {products.map((element, index) => {
          return <ShopCard key={index} {...element} />;
        })}
      </List>
    </Container>
  );
};
export default CardList;
