// Tela depois do Votante se identificar
import React, { useEffect } from "react";

import { joinVideoConf } from "../../v4hApi/videoconf.js";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

export default function VoteConference(props) {
  const { isMyTurn, sessionId } = props;

  useEffect(() => {
    if (isMyTurn) {
      joinVideoConf(sessionId, "conference");
    }
  }, [isMyTurn, sessionId]);

  //SE NÃO for a vez dele Mostra o "Aguarde a sua vez"
  //SE FOR mostra a conferencia

  return (
    <div id="page-vote-conference" className="container">
      <PageHeader title="Se autentique. Mostre sua identificação ao mesário." />
      <div id="login-box">
        {!isMyTurn ? (
          <div className="content">
            <div className="conference">
              <h1>Aguarde a sua vez...</h1>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="conference">Aqui fica o V4H</div>
          </div>
        )}
      </div>
    </div>
  );
}
