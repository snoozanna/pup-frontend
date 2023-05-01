import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import GiftAidForm from "../../components/GiftAidForm/index.js";
import PIECE_QUERY from "./../../queries/piece/index.js";
import Loader from "../../components/Loader/index.js";
import "./GiftAid.css";

const GiftAid = () => {
  let { slug } = useParams();
  console.log(slug);
  const [game, setGame] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { loading, error, data } = useQuery(PIECE_QUERY, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;
  console.log("data", data.pieces.data[0].attributes.url);
  const { title, url } = data.pieces.data[0].attributes;
  return (
    <>
      <Header pageTitle={"Nearly there..."} />
      <main className="giftaid contentWrapper">
        {/* <SimpleForm url={MCURL} /> */}

        <div className="contentItem">
          <p>Thank you for supporting Coney. </p>
          <p>Are you able to Gift Aid your donation?</p>
          <p>
            Gift Aid is reclaimed by the charity from the tax you pay for the
            current tax year. Your address is needed to identify you as a
            current UK taxpayer.
          </p>
          <p>
            Gift Aid increases the value of membership contributions and
            donations to charities by allowing them to reclaim basic rate tax on
            your gift.{" "}
          </p>
          <p>
            It allows us to claim 25% on top of your donation, for example, on a
            £50 membership or donation, we can claim back an additional £12.50.{" "}
          </p>
          <button
            className="funButton"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Show me the Gift Aid Form!
          </button>
        </div>

        <div className="contentItem giftaidformWrapper">
          {showForm ? <GiftAidForm /> : null}
        </div>
        <div className="contentItem">
          <button class="pieceURL funButton">
            Go to {""}
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GiftAid;
