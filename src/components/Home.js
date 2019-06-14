import React, { Component } from 'react';
import HomeListaImagens from './HomeListaImagens.js';







class Home extends Component {

  state = {
    lista: [
      {
        id: 1,
        src: "./imagensAgentes/imagens/AndreSilveira.jpg",
        nome: "Multas",
      },
      {
        id: 2,
        src: "./imagensAgentes/imagens/AndreSilveira.jpg",
        nome: "Viaturas",
      },
      {
        id: 3,
        src: "./imagensAgentes/imagens/AndreSilveira.jpg",
        nome: "Agentes",
      }
    ]
  }




  render() {
    return (
      <div className="App">
        <header style={headerStyle}>HOME</header>
          <div style={divStyle}>
              <HomeListaImagens key={this.state.lista.id} lista={this.state.lista}/>
          </div>
          


      </div>
    );
  }
}

const divStyle={
    display: "flex",
    justifyContent: "space-evenly",
    padding: "50px"
   }
   const headerStyle={
     textAlign:"center",
     fontSize:"50px",
     padding:"40px"
   }
  



export default Home;