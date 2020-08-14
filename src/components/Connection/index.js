import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import { connect } from "react-redux";
import {
  changeSession,
  changeVoter,
  changeQueueLenght,
} from "../../store/actions/session";

import "./styles.css";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function Connection(props) {
  const { queueLenght, sessionId, myUser, currentVoter } = props;
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      setConnected(true);
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply! ", dataFromServer);
      if (dataFromServer.type === "new-current-user") {
        const newCurrentUser = {
          id: dataFromServer.id,
          name: dataFromServer.name,
        };
        props.changeCurrentVoter(newCurrentUser);
      } else if (dataFromServer.type === "lenght-of-queue") {
        const newLenghtOfQueue = dataFromServer.value;
        props.changeLenght(newLenghtOfQueue);
      } else if (dataFromServer.type === "your-sessionId") {
        const newSessionId = dataFromServer.value;
        props.setSession(newSessionId);
      }
    };
  });

  useEffect(() => {
    if (connected) {
      client.send(
        JSON.stringify({
          type: "set-sessionId",
          data: sessionId,
        })
      );
    }
  }, [sessionId, connected]); // Quando o sessionId Alterar ele Envia Para o Servidor Que distribui esse ID

  useEffect(() => {
    if (connected) {
      console.log("ENVIANDO " + myUser);
      client.send(
        JSON.stringify({
          type: "enter-queue",
          data: myUser,
        })
      );
    }
  }, [myUser, connected]); // Quando my User Alterar, ele entra na fila/ Ele altera ao dar Submit no Login

  useEffect(() => {
    if (connected) {
      client.send(
        JSON.stringify({
          type: "get-lenght-of-queue",
        })
      );
    }
  }, [queueLenght, connected]); // Quando queueLenght Alterar, ele atualiza isso para todos/ Ele altera ao dar Submit no Login

  const onMoveQueueHandler = () => {
    client.send(
      JSON.stringify({
        type: "move-queue",
      })
    );
  };

  const onGetHeadOfQueueHandler = () => {
    client.send(
      JSON.stringify({
        type: "get-head-of-queue",
      })
    );
  };

  const getLenghtOfQueueHandler = () => {
    client.send(
      JSON.stringify({
        type: "get-lenght-of-queue",
      })
    );
  };

  return (
    <div id="box">
      <h1>Número de Eleitores na Fila: {queueLenght}</h1>
      <h1>Eleitor Atual: </h1>
      <h2>ID: {currentVoter.id}</h2>
      <h2>Nome: {currentVoter.name}</h2>
      <button onClick={onGetHeadOfQueueHandler}>Ver Início da fila</button>
      <button onClick={onMoveQueueHandler}>Receber Próximo da fila</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sessionId: state.session.sessionId,
    currentVoter: state.session.currentVoter,
    queueLenght: state.session.queueLenght,
    myUser: state.session.myUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSession(session) {
      const action = changeSession(session);
      dispatch(action);
    },
    changeCurrentVoter(voter) {
      const action = changeVoter(voter);
      dispatch(action);
    },
    changeLenght(lenght) {
      const action = changeQueueLenght(lenght);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
