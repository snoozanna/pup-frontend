import React from "react";
import { Routes, Route } from "react-router-dom";
// import Nav from "./../../components/Nav";
import Landing from "./../Landing/index.js";
import Home from "./../Home/index.js";
import NotFound from "./../404/index.js";
import SignUp from "./../SignUp/index.js";
import GiftAid from "./../GiftAid/index.js";
import OpenSesameForm from "./../OpenSesameForm/index.js";
import Piece from "../Piece/index.js";
import Event from "../Event/index.js";
import PiecesList from "../Pieces/index.js";
import EventsList from "../Events/index.js";
import Tag from "../Tags/index.js";
import WhatsOn from "../WhatsOn/index.js";

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
        <Route path="/gift-aid" element={<GiftAid />} exact />
        <Route path="/gift-aid/:slug" element={<GiftAid />} />
        <Route path="/pieces/:slug" element={<Piece />} exact />
        <Route path="/events/:slug" element={<Event />} exact />
        <Route path="/events" element={<EventsList />} exact />
        <Route path="/tag/:slug" element={<Tag />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      {/* {window.location.pathname !== "/" ? <Footer /> : null} */}
    </div>
  );
}

export default App;
