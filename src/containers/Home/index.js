// import { Link } from "react-router-dom";
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
            <main className="home">
              <section className="home">
                <h1 className="funtitle">Coney Notice Board</h1>
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
                </div>
                <img src={rabbit} alt="rabbit" className="rabbit" />
              </section>
            </main>
          </>
        );
      }}
    </Query>
  );
};

export default Home;
