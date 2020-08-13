// Tela depois do Votante se identificar
import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { joinVideoConf } from "../../v4hApi/videoconf.js";

import { connect } from "react-redux";
import { changeSession, changeVoter } from "../../store/actions/session";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

export default function VoteConference(props) {
  const [isMyTurn, setIsMyTurn] = useState(false);

  useEffect(() => {
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply! ", dataFromServer);
      if (dataFromServer.msg === "start-conference") {
        setIsMyTurn(true);
      }
    };
  });

  useEffect(() => {
    client.onopen = () => {
      console.log("Connected to the Vote Server!");
      client.send(
        JSON.stringify({
          type: "message",
          msg: "connect-me",
          //user: props.userName,
        })
      );
    };
  });

  useEffect(() => {
    if (isMyTurn) {
      joinVideoConf("9", "conference");
    }
  });

  //SE NÃO for a vez dele Mostra o "Aguarde a sua vez"
  //SE FOR mostra a conferencia

  return (
    <div id="page-vote-conference" className="container">
      <PageHeader title="Se autentique. Mostre sua identificação ao mesário." />
      <div id="login-box">
        {isMyTurn ? (
          <h1>Aguarde a sua vez...</h1>
        ) : (
          <div id="conference">Aqui fica o V4H</div>
        )}
      </div>
    </div>
  );
}
