import {
  Container,
  Aggregate,
  Stars,
  Text,
  Number,
  Percent,
  Bar,
  Header,
  Row,
  Grid,
  Fill,
} from "Components/Styled/Product/Overview/Reviews/ReviewScore";
import Star from "Components/Functional/Common/Star";

const ReviewScore = () => {
  let score = 5;
  return (
    <Container>
      <Header>
        <Aggregate>{score.toFixed(1)}</Aggregate>
        <Stars>
          {new Array(score).fill("*").map((el, index) => {
            return <Star key={index} filled={true} />;
          })}
        </Stars>
        <Text>Based on 1 Review</Text>
      </Header>

      <Grid>
        <Row>
          <Number>5 star</Number>
          <Bar>
            <Fill percent={100}></Fill>
          </Bar>
          <Percent>100%</Percent>
        </Row>
        <Row>
          <Number>4 star</Number>
          <Bar>
            <Fill percent={40}></Fill>
          </Bar>
          <Percent>100%</Percent>
        </Row>
        <Row>
          <Number>3 star</Number>
          <Bar>
            <Fill percent={54.23}></Fill>
          </Bar>
          <Percent>50%</Percent>
        </Row>
        <Row>
          <Number>2 star</Number>
          <Bar>
            <Fill percent={0}></Fill>
          </Bar>
          <Percent>0%</Percent>
        </Row>
        <Row>
          <Number>1 star</Number>
          <Bar>
            <Fill percent={54.23}></Fill>
          </Bar>
          <Percent>0%</Percent>
        </Row>
      </Grid>
    </Container>
  );
};

export default ReviewScore;
