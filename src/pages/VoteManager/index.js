import React from "react";

import { connect } from "react-redux";
import { changeSession, changeVoter } from "../../store/actions/session";

import PageHeader from "../../components/PageHeader";
import Connection from "../../components/Connection";

import {
  startVideoConf,
  stopVideoConf,
  joinVideoConf,
} from "../../v4hApi/videoconf.js";

import "./styles.css";

function VoteManager(props) {
  const { sessionId } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = sessionId;
    if (id.length > 0) {
      startVideoConf(id);
    }
  };

  return (
    <div id="page-vote-manager">
      <PageHeader title="Página do Mesário" />

      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">SessionId</label>
        <input
          type="text"
          id="sessionId"
          name="fname"
          onChange={(e) => props.setSession(e.target.value)}
        />
        <br />
        <br />
        <button id="startConference" type="submit">
          Criar Seção
        </button>
        <button type="button" onClick={() => stopVideoConf()}>
          Finalizar Seção
        </button>
        <button type="button" onClick={() => joinVideoConf(sessionId)}>
          Entrar em uma Seção
        </button>
      </form>
      <div id="content">
        <div id="meet">Aqui fica o V4H</div>
        <div className="current-voter">
          <Connection />
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
    setSession(session) {
      const action = changeSession(session);
      dispatch(action);
    },
    getNextVoter() {
      const action = changeVoter();
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteManager);
