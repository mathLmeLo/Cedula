import React from "react";
import { Link } from "react-router-dom";

import { GiVote } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";

import cedulaImg from "../../assets/images/logos/CEDULA2.png";
import voteImg from "../../assets/images/vote.png";

import "./styles.css";

function Home() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={cedulaImg} alt="Logo" />
          <h2>Voto online, confiável e seguro.</h2>
        </div>

        <img src={voteImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/vote" className="vote">
            <GiVote alt="Votar" />
            Quero Votar
          </Link>

          <Link to="/manage-election" className="manage-election">
            <GrUserManager alt="Sou Mesário" />
            Sou Mesário
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 votando agora...
          <AiOutlineClockCircle alt="Relógio" />
        </span>
      </div>
    </div>
  );
}

export default Home;
