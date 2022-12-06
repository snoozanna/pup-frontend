import { Link } from "react-router-dom";

import pin from "./../../assets/pin.png";
import "./Note.css";
const Note = (event) => {
  const { eventTitle, date } = event;
  console.log(event);
  return (
    <>
      <Link to={`/whats-on`} className="uk-link-reset note-wrapper">
        <div className="note">
          <img src={pin} alt="pin" className="pin" />
          <h3>Coming up...</h3>
          <h3 className="eventTitle">{eventTitle}</h3>
          <p>{date}</p>
        </div>
      </Link>
    </>
  );
};

export default Note;
