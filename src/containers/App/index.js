import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./../../components/Nav";
import Landing from "./../Landing/index.js";
import Article from "../Article/index.js";
import ArticlesList from "../Articles/index.js";
import Category from "../Categories/index.js";
import WhatsOn from "../WhatsOn/index.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/articles-list" element={<ArticlesList />} exact />
        <Route path="/whats-on" element={<WhatsOn />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
        <Route path="/category/:slug" element={<Category />} exact />
      </Routes>
    </div>
  );
}

export default App;
