// Add import statements below
import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleIDs,
  resetCards,
  flipCard,
  selectMatchedIDs,
} from "../../boardSlice";

let cardLogo =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
  };
  const resetFlipHandler = () => {
    dispatch(resetCards());
  };

  let cardStyle = "resting";
  let click = () =>
    visibleIDs.length == 2 ? resetFlipHandler() : flipHandler(id);

  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );
  // 1st if statement
  // implement card id array membership check
  if (matchedIDs.includes(id) || visibleIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = "matched";
  }
  if (!matchedIDs.includes(id) && visibleIDs.length == 2) {
    cardStyle = "no-match";
  }

  // 3rd if statement
  // implement number of flipped cards check
  // if (visibleIDs.length == 2) {
  //   click = () => {};
  // }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};