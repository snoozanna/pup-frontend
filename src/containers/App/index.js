import React from "react";
import { Routes, Route } from "react-router-dom";
// import Nav from "./../../components/Nav";
import Landing from "./../Landing/index.js";
import Home from "./../Home/index.js";
import NotFound from "./../404/index.js";
import SignUp from "./../SignUp/index.js";
import OpenSesameForm from "./../OpenSesameForm/index.js";
import Piece from "../Piece/index.js";
import PiecesList from "../Pieces/index.js";
import Tag from "../Tags/index.js";
import WhatsOn from "../WhatsOn/index.js";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="App">
      {/* {window.location.pathname !== "/" ? <Nav /> : null} */}
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/pieces-list" element={<PiecesList />} exact />
        <Route path="/pieces" element={<PiecesList />} exact />
        <Route path="/whats-on" element={<WhatsOn />} exact />
        <Route path="/os-form" element={<OpenSesameForm />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="/piece/:slug" element={<Piece />} exact />
        <Route path="/tag/:slug" element={<Tag />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
