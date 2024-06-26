import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Authors from "./components/Authors";
import Transcribe from "./components/Transcribe";
import HeaderImage from "./images/imageBanner.png";

function App() {
  return (
    <main className="flex-col">
      <section id="header">
        <Header />
      </section>

      <section id="home" className="home-section">
        <div className="home-image">
          <img src={HeaderImage} className="header-image" />
        </div>
        <Body />
      </section>

      {/* <section id="instruction" className="home">
        <Instruction />
      </section> */}

      <section id="transcribe" className="home" />
      <Transcribe />
      <section id="authors" className="home" />
      <Authors />
    </main>
  );
}

export default App;
