import Related from "./Related";
import Details from "./Details";
import Overview from "./Overview";
import { Container } from "Components/Styled/Product";

const overviewData = {
  description: {
    title: "Why work from home has incresed productivity.",
    description: `"But I must explain to you how all this mistaken idea of denouncing
    pleasure and praising pain was born and I will give you a complete
    account of the system, and expound the actual teachings of the great
    explorer of the truth, the master-builder of human happiness. /\nNo one
    rejects, dislikes, or avoids pleasure itself, because it is pleasure,
    but because those who do not know how to pursue pleasure rationally
    encounter consequences that are extremely painful. /\nNor again is there
    anyone who loves or pursues or desires to obtain pain of itself, because
    it is pain, but because occasionally circumstances occur in which toil
    and pain can procure him some great pleasure. /\nTo take a trivial example,
    which of us ever undertakes laborious physical exercise, except to
    obtain some advantage from it? But who has any right to find fault with
    a man who chooses to enjoy a pleasure that has no annoying consequences,
    or one who avoids a pain that produces no resultant pleasure?"`,
  },
  reviews: {
    ratings: {},
    comments: [
      {
        name: "Andrew Smith",
        rating: 4,
        verified: false,
        date: "May 9, 2022",
        review:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu, nulla in tincidunt aliquam nulla arcu molestie. Nunc scelerisque ullamcorperfringilla ut aliquam enim. Vel vel risus risus in ligula egestas. Risus, quisque adipiscing bibendum viverra non mattis molestie pulvinar.",
      },
      {
        name: "Brian Suruki",
        rating: 5,
        verified: true,
        date: "May 19, 2022",
        review:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eu, nulla in tincidunt aliquam nulla arcu molestie. Nunc scelerisque ullamcorperfringilla ut aliquam enim. Vel vel risus risus in ligula egestas. Risus, quisque adipiscing bibendum viverra non mattis molestie pulvinar.",
      },
    ],
  },
};
const Product = () => {
  return (
    <Container>
      <Details />
      <Overview data={overviewData} />
      <Related />
    </Container>
  );
};

export default Product;
