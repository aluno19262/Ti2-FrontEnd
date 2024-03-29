import React, { Component } from 'react';


class DetalhesAgentes extends Component {

  render() {
    return this.props.agente.map((agente) => (
        <div style={DivStyle}>
              <p style={pStyle}> {agente.nome} </p>
              <img style={imgStyle} key={agente.id} src={agente.src} alt="P"></img>
              <p style={pStyle}> {agente.descricao}{agente.nome} </p>
        </div>    
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
export default DetalhesAgentes;