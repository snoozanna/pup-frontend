import { Link } from "react-router-dom";

import pin from "./../../assets/pin.png";
import "./Note.css";
const Note = (notice) => {
  const { eventTitle, date, position, subtitle, uid } = notice;

  return (
    <>
      <Link
        to={`/whats-on`}
        className={`uk-link-reset note-wrapper  ${position}`}
        key={uid}
      >
        <div className={`note`}>
          <img src={pin} alt="pin" className="pin" />
          <h3>{subtitle}</h3>
          <h3 className="eventTitle">{eventTitle}</h3>
          <p>{date}</p>
        </div>
      </Link>
    </>
  );
};

export default Note;
