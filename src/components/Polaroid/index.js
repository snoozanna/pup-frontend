import { Link } from "react-router-dom";

import "./Polaroid.css";
const Polaroid = (notice) => {
  const { image, caption, position } = notice;
  console.log("caption", caption, position);
  return (
    <>
      <Link
        to={`/whats-on`}
        className={`uk-link-reset polaroid-wrapper  ${position}`}
      >
        {" "}
        <div className="polaroid">
          <div className="imgWrapper">
            <img src={image.data.attributes.url} alt="alt"></img>
          </div>
          <div className="caption">
            <p>{caption}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Polaroid;
