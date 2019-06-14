import React, { Component } from 'react';



class HomeListaImagens extends Component {

  render() {
    return this.props.lista.map((lista) => (
      <a href="/" >
        <div style={DivStyle}>
          <p style={pStyle}> {lista.nome} </p>
          <img style={imgStyle} key={lista.id} src={lista.src} alt="P"></img>
          <p style={pStyle}> {lista.nome} </p>
        </div>
      </a>
    ));
  }
}



const DivStyle = {
  display: "flex",
  background: '#909090',
  flexDirection: "column",
}

const imgStyle = {
  width: "150px",
  height: "150px",
  margin:"10px"

}


const pStyle = {
  textAlign:"center"
    }
export default HomeListaImagens;