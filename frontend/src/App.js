import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Authors from "./components/Authors";
import Instruction from "./components/Instruction";
import Transcribe from "./components/Transcribe";

function App() {
  return (
    <main className="flex-col">
      <section id="header">
        <Header />
      </section>

      <section id="home" className="home-section">
        <div className="home-image">
          We can insert image here (idk unsa na image)
        </div>
        <Body />
      </section>

      <section id="authors" className="home">
        <Authors />
      </section>

      <section id="instruction" className="home">
        <Instruction />
      </section>

      <section id="transcribe" className="home">
        <Transcribe />
      </section>

      <section id="tester-section">tester</section>
    </main>
  );
}

export default App;
