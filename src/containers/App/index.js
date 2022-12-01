import React from "react";
import { Routes, Route } from "react-router-dom";
// import Nav from "./../../components/Nav";
import Landing from "./../Landing/index.js";
import Article from "../Article/index.js";
import Piece from "../Piece/index.js";
import ArticlesList from "../Articles/index.js";
import PiecesList from "../Pieces/index.js";
import Category from "../Categories/index.js";
import WhatsOn from "../WhatsOn/index.js";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="App">
      {/* {window.location.pathname !== "/" ? <Nav /> : null} */}
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/articles-list" element={<ArticlesList />} exact />
        <Route path="/pieces" element={<PiecesList />} exact />
        <Route path="/whats-on" element={<WhatsOn />} exact />
        <Route path="/piece/:slug" element={<Piece />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
        <Route path="/category/:slug" element={<Category />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
