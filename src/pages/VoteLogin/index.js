import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addUser } from "../../store/actions/session";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

// Função para gerar userId unico para cada usuario;
const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

function VoteLogin(props) {
  const [name, setName] = useState("");
  const { sessionId, userQueue } = props;

  const handleRequest = (e) => {
    e.preventDefault();
    const myID = getUniqueID;
    if (name.length > 0) {
      props.enterVoteQueue(myID, name);
    }
  };

  return (
    <div id="page-voter-login" className="container">
      <PageHeader title="Bem vindo. Por favor, identifique-se." />
      <div id="box">
        <div id="login-box">
          <form className="login-form">
            <div className="input-block">
              <label htmlFor="identification">ID do Eleitor</label>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome..."
              />
            </div>
            {/* <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha..."
              />
            </div> */}
            <Link to="/vote/conference">
              <button onClick={handleRequest}>Entrar na fila para votar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sessionId: state.session.sessionId,
    userQueue: state.session.userQueue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enterVoteQueue(id, name) {
      const action = addUser(id, name);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteLogin);
