import TextHeader from "Components/Functional/Common/Headers/TextHeader";
import Profile from "./Profile";

const Team = () => {
  return (
    <div>
      <TextHeader
        padding="50px 0px 20px 0px"
        title="Our Team"
        subtitle="It's hard to belia we chat with the team in any socinswers."
      ></TextHeader>

      <div>
        <Profile />
      </div>
    </div>
  );
};

export default Team;
