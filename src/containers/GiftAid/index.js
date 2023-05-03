import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../../components/Loader/index.js";
import Query from "../../components/Query";
import GiftAidForm from "../../components/GiftAidForm/index.js";
import GIFTAID_QUERY from "./../../queries/giftaid/giftaid.js";
import PIECE_QUERY from "./../../queries/piece/index.js";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./GiftAid.css";

const GiftAid = () => {
  let { slug } = useParams();

  const [showForm, setShowForm] = useState(false);
  const { loading, error, data } = useQuery(PIECE_QUERY, {
    variables: { slug },
  });
  // const { loading, error, data } = useQuery(GIFTAID_QUERY, {});
  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  const { title, url } = data.pieces.data[0].attributes;
  return (
    <>
      <Header pageTitle={"Nearly there..."} />
      <main className="giftaid contentWrapper">
        <Query query={GIFTAID_QUERY}>
          {({ data: { giftaidpage } }) => {
            const { introCopy } = giftaidpage.data.attributes;
            return (
              <div className="contentItem">
                <ReactMarkdown
                  children={introCopy}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>{" "}
                <button
                  className="funButton"
                  onClick={() => {
                    setShowForm(!showForm);
                  }}
                >
                  Show me the Gift Aid Form!
                </button>
              </div>
            );
          }}
        </Query>

        <div className="contentItem giftaidformWrapper">
          {showForm ? <GiftAidForm /> : null}
        </div>
        <div className="contentItem">
          <button className="pieceURL funButton">
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
