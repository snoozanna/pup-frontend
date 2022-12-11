// import { Link } from "react-router-dom";
import SpinMenu from "./../../components/SpinMenu/index.js";
import Note from "../Note/index.js";
import rabbit from "./../../assets/rabbit.png";
import "./Home.css";
const Home = () => {
  return (
    <section className="home">
      {/* <div className="yellow shape "></div>
      <div className="blue shape "></div>
      <div className="pink shape "></div>
      <div className="green shape "></div> */}
      <h1 className="funtitle">Coney Notice Board</h1>
      <div className="corkboard">
        <Note eventTitle="Event 1" date="25 December, 7pm" />
        <Note eventTitle="Event 2" date="1 Jan, 3am" />
        <SpinMenu />
      </div>
      <img src={rabbit} alt="rabbit" className="rabbit" />
    </section>
  );
};

export default Home;
