import React, { Component } from 'react';
import ListaViaturas from './ListaViaturas.js';







class Viaturas extends Component {
    state = {
        viatura: [
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
        <header style={headerStyle}>Lista de Viaturas</header>
          <div style={divStyle}>
              <ListaViaturas key={"multa"+this.state.viatura.id} viatura={this.state.viatura}/>
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
  



export default Viaturas;