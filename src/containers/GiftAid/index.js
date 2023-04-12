import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import GiftAidForm from "../../components/GiftAidForm/index.js";

import "./GiftAid.css";

const GiftAid = () => {
  const [game, setGame] = useState("");
  return (
    <>
      <Header pageTitle={"Nearly there..."} />
      <main className="signup contentWrapper">
        {/* <SimpleForm url={MCURL} /> */}

        <div class="contentItem">
          <h2>Gift Aid</h2>
          <p>
            Thank you for supporting Coney. Are you able to Gift Aid your
            donation?
          </p>
          <p>
            Gift Aid is reclaimed by the charity from the tax you pay for the
            current tax year. Your address is needed to identify you as a
            current UK taxpayer.
          </p>
          <strong>FORM TBC</strong>
        </div>
        <div class="contentItem">
          <GiftAidForm />
        </div>
        <p>Go to {game}</p>
      </main>

      <Footer />
    </>
  );
};

export default GiftAid;
