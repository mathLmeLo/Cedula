import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //this.props.loginRequest(this.state);
  };

  return (
    <div id="page-voter-login" className="container">
      <PageHeader title="Bem Vindo. Faça seu login com seu ID de Eleitor." />
      <div id="login-box">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-block">
            <label htmlFor="subject">ID do Eleitor</label>
            <input
              type="email"
              name="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
            />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Senha</label>
            <input
              type="password"
              name="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha..."
            />
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
}
