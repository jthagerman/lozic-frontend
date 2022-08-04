import ReviewCard from "./ReviewCard";
import {
  ReviewContainer,
  Comments,
} from "Components/Styled/Product/Overview/Reviews";
import ReviewScore from "./ReviewScore";
const Reviews = ({ ratings, comments }) => {
  return (
    <ReviewContainer>
      <ReviewScore />
      <Comments>
        {comments.map((comment, index) => {
          return <ReviewCard key={index} {...comment} />;
        })}
      </Comments>
    </ReviewContainer>
  );
};

export default Reviews;
