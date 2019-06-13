import React, { Component } from 'react';



class HomeListaImagens extends Component {
    
  render() {
    return this.props.lista.map((lista) => (
        <div style={DivStyle}>
        <p> {lista.nome} </p>
        <img style={imgStyle} key={lista.id} src={lista.src} alt="P"></img>
        <p> {lista.nome} </p>
        </div>
    ));
  }
}



const DivStyle = {
    display: "flex",
    background: '#909090',
    flexDirection: "column",
  }

  const imgStyle = {
    width:"150px",
    height:"150px",
    
  }
export default HomeListaImagens;