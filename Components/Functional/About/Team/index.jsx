import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import Profile from "./Profile";
import teamMember from "public/images/About/teamMember.png";
import { Container, List } from "Components/Styled/About/Team";

const teamMembers = new Array(7).fill({
  name: "John Doe",
  image: teamMember.src,
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quissapien",
});

const Team = () => {
  return (
    <Container>
      <TextHeader
        padding="0px 0px 20px 0px"
        title="Our Team"
        subtitle="It's hard to belia we chat with the team in any socinswers."
      ></TextHeader>

      <List>
        {teamMembers.map((associate, index) => {
          return <Profile {...associate} key={index} />;
        })}
        <Profile />
      </List>
    </Container>
  );
};

export default Team;
