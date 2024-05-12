import React from "react";
import Abueva from "../images/abueva.jpg";
import Quijano from "../images/quijano.jpg";
import Sumalinog from "../images/Sumalinog.jpg";

function Authors() {
  return (
    <div className="authors">
      {/* SEAN VENZ QUIJANO */}
      <div className="container sideContainer">
        <div
          className="circle"
          style={{ backgroundImage: `url(${Quijano})` }}
        />

        <div className="author-container">
          <div className="author-details titleFont authorName">
            Sean Venz Quijano
          </div>
          <div className="details">
            <a
              className="link-text"
              href="https://www.facebook.com/quijano.seanvenz"
            >
              <span className="text-linker">Facebook</span>
            </a>
            <a
              className="link-text"
              href="https://www.linkedin.com/in/sean-venz-quijano/"
            >
              <span className="text-linker">LinkedIn</span>
            </a>
            <a className="link-text" href="https://seanvcq.vercel.app/">
              <span className="text-linker">Portfolio</span>
            </a>
            <a
              className="link-text"
              href="mailto:quijano.seanvenz@gmail.com?subject=Hello&body=Contact Message"
            >
              <span className="text-linker">Email</span>
            </a>
          </div>
        </div>
      </div>
      {/* ESTRELLA ABUEVA */}
      <div className="container midContainer">
        <div className="circle" style={{ backgroundImage: `url(${Abueva})` }} />

        <div className="author-container">
          <div className="author-details titleFont authorName">
            ESTRELLA ABUEVA
          </div>
          <div className="details">
            <a
              className="link-text"
              href="https://www.facebook.com/Abueva.Estrella"
            >
              <span className="text-linker">Facebook</span>
            </a>
            <a
              className="link-text"
              href="https://www.linkedin.com/in/estrella-abueva/"
            >
              <span className="text-linker">LinkedIn</span>
            </a>
            <a
              className="link-text"
              href="mailto:estrellalabueva@gmail.com?subject=Hello&body=Contact Message"
            >
              <span className="text-linker">Email</span>
            </a>
          </div>
        </div>
      </div>
      {/* KENT STEPHEN SUMALINOG */}
      <div className="container sideContainer">
        <div
          className="circle"
          style={{ backgroundImage: `url(${Sumalinog})` }}
        />

        <div className="author-container">
          <div className="author-details titleFont authorName">
            KENT STEPHEN SUMALINOG
          </div>
          <div className="details">
            <a
              className="link-text"
              href="https://www.facebook.com/kentstephen.sumalinog/"
            >
              <span className="text-linker">Facebook</span>
            </a>
            <a
              className="link-text"
              href="https://www.linkedin.com/in/kentstephensumalinog/"
            >
              <span className="text-linker">LinkedIn</span>
            </a>
            <a
              className="link-text"
              href="mailto:kentsumalinog.work@gmail.com?subject=Hello&body=Contact Message"
            >
              <span className="text-linker">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;
