import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DetalhesAgentes from './DetalhesAgentes';


class ListaAgentes extends Component {

  render() {
    return this.props.agente.map((agente) => (
      <Router>
        <Link to={"/Agentes/" + agente.id}>
          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {agente.nome} </p>
              <img style={imgStyle} key={agente.id} src={agente.src} alt="P"></img>
              <p style={pStyle}> {agente.descricao}{agente.nome} </p>
            </button>
          </div>
        </Link>
        <Route path={"/Agentes/" + agente.id} component={DetalhesAgentes} />
      </Router>
    ));
  }
}


const DivStyle = {
  display: "flex",
  background: '#909090',
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
}

const imgStyle = {
  width: "150px",
  height: "150px",
  margin: "10px"
}

const pStyle = {
  textAlign: "center"
}
export default ListaAgentes;