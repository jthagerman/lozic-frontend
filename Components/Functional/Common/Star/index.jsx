import starIcon from "public/images/icons/star.svg";
import starEmpty from "public/images/icons/starEmpty.svg";
import { StarImage } from "Components/Styled/Common/Star";
const Star = ({ filled }) => {
  if (filled) {
    return (
      <StarImage draggable={false} alt={"filled star"} src={starIcon.src} />
    );
  } else {
    return (
      <StarImage draggable={false} alt={"empty star"} src={starEmpty.src} />
    );
  }
};

export default Star;
