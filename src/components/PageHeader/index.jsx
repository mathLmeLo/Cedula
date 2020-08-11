import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.svg";
import { AiOutlineRollback } from "react-icons/ai";

import "./styles.css";

function PageHeader(props) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <AiOutlineRollback alt="Voltar" color="#fff" size="3rem" />
        </Link>
        <img src={logoImg} alt="Cedula" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
}

export default PageHeader;
