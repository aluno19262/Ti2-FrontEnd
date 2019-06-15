import React, { Component } from 'react';
import ListaMultas from './ListaMultas.js';







class Multas extends Component {
    state = {
        multa: [
          {
            id: 1,
            descricao:"blablabla",
            nome: "Excesso de bla",
          },
          {
            id: 2,
            descricao:"blebleble",
            nome: "Excesso de ble",
          },
          {
            id: 3,
            descricao:"bliblibli",
            nome: "Excesso de bli",
          }
        ]
      }




  render() {
    return (
      <div className="App">
        <header style={headerStyle}>Lista de Multas</header>
          <div style={divStyle}>
              <ListaMultas key={"multa"+this.state.multa.id} multa={this.state.multa}/>
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
  



export default Multas;