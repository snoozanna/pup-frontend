import { Link } from "react-router-dom";
import Query from "./../../components/Query/index.js";
import NOTICES_QUERY from "../../queries/notices/notices";
import SpinMenu from "./../../components/SpinMenu/index.js";
import Note from "./../../components/Note/index.js";
import Polaroid from "./../../components/Polaroid/index.js";
import rabbit from "./../../assets/rabbit.png";
import "./Home.css";
const Home = () => {
  return (
    <Query query={NOTICES_QUERY}>
      {({ data: { notices } }) => {
        notices = notices.data;

        return (
          <>
            <header>
              <Link to={`/`} className>
                <h2 className="siteTitle">
                  <span>The</span> <span>Pop Up</span>
                  <span>Playhouse</span>
                </h2>
              </Link>
            </header>
            <main className="home">
              <h1 className="funtitle">Coney Notice Board</h1>
              <section className="corkboard-wrapper">
                <div className="corkboard">
                  {notices.map((notice) => {
                    console.log("notice", notice);
                    const {
                      subtitle,
                      eventName,
                      date,
                      type,
                      caption,
                      position,
                      image,
                      uid,
                    } = notice.attributes;

                    switch (type) {
                      case "postit":
                        return (
                          <Note
                            subtitle={subtitle}
                            eventTitle={eventName}
                            date={date}
                            position={position}
                            key={uid}
                          />
                        );
                      case "polaroid":
                        return (
                          <Polaroid
                            caption={caption}
                            image={image}
                            position={position}
                            key={uid}
                          />
                        );
                      case "circle":
                        return <SpinMenu />;
                      default:
                        return (
                          <Note
                            eventTitle={eventName}
                            date={date}
                            position={position}
                          />
                        );
                    }
                  })}
                  <a
                    href="http://www.unregisteredsite.net/unmarkedentrance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={rabbit} alt="rabbit" className="rabbit" />
                  </a>
                </div>
              </section>
            </main>
          </>
        );
      }}
    </Query>
  );
};

export default Home;
