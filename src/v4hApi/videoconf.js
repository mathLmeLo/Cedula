const v4h_api = new window.V4H();

window.$(document).ready(function () {
  // Fazendo o login no sistema v4h
  v4h_api.login("usuario", "senha").then(() => {
    console.log("Login realizado com sucesso.");
  });

  // Desabilitar o botão para encerrar a conferência
  //document.getElementById("stopConference").disabled = true;

  // Desabilitar o botão para encerrar a conferência
  //document.getElementById("joinConference").disabled = true;
});

// Funcão executada quando o botão de iniciar uma conferência é clicado
export function startVideoConf(sessionId) {
  // Requisitar uma conferência
  v4h_api.requestConference(sessionId).then(function (sessionId) {
    //Iniciar uma conferência
    v4h_api.startConference(
      sessionId,
      document.querySelector("#meet"),
      "100%",
      "100%",
      "Nome Sobrenome",
      "https://picsum.photos/200"
    );

    // Registar um callback para ser executado na saída da conferência
    v4h_api.registerEndedListener(conferenceEnded);
  });
}

// Funcão executada quando o botão de juntar-se a uma conferência é clicado
export function joinVideoConf(sessionId, reference) {
  v4h_api.joinConference(
    sessionId,
    document.querySelector(`#${reference}`),
    "100%",
    "100%",
    "Nome Sobrenome",
    "https://picsum.photos/200"
  );

  // Registar um callback para ser executado na saída da conferência
  v4h_api.registerEndedListener(conferenceEnded);
}

// Funcão executada quando o botão de desligar fora da conferência é clicado
export function stopVideoConf() {
  // Desabilitar o botão para iniciar a conferência
  // document.getElementById("startConference").disabled = false;

  // // Habilitar o botão para encerrar a conferência
  // document.getElementById("stopConference").disabled = true;

  // Encerrar o iframe
  console.log("TENTANDO FECHAR A CALL");
  v4h_api.jApi.dispose();
}

// Função executada quando o botão de desligar dentro da conferência é clicado
export function conferenceEnded(mySessionId) {
  //Habilitar o botão para iniciar a conferência
  document.getElementById("startConference").disabled = true;
  //Desabilitar o botão para encerrar a conferência
  document.getElementById("startConference").disabled = true;
}

export function validateJoin() {
  if (document.getElementById("sessionId").value.length > 0) {
    // Habilitar o botão para juntar-se a conferência
    document.getElementById("joinConference").disabled = false;
  } else {
    // Desabilitar o botão para juntar-se a conferência
    document.getElementById("joinConference").disabled = true;
  }
}
