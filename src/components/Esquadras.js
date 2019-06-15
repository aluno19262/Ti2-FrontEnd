import React, { Component } from 'react';
import ListaEsquadras from './ListaEsquadras.js';







class Esquadras extends Component {
    state = {
        esquadra: [
          {
            id: 1,
            localizacao:"Entroncamento",
            nome: "Esquadra",
          },
          {
            id: 2,
            localizacao:"Tomar",
            nome: "Esquadra",
          },          {
            id: 3,
            localizacao:"Torres Novas",
            nome: "Esquadra",
          },
        ]
      }




  render() {
    return (
      <div className="App">
        <header style={headerStyle}>Lista de Esquadras</header>
          <div style={divStyle}>
              <ListaEsquadras key={"esquadra"+this.state.esquadra.id} esquadra={this.state.esquadra}/>
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
  



export default Esquadras;