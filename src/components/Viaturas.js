import React, { Component } from 'react';
import ListaViaturas from './ListaViaturas.js';







class Viaturas extends Component {
    state = {
        viatura: [
          {
            id: 1,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Audi",
            modelo:"A4",
            ano:"2001"
          },
          {
            id: 2,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Renault",
            modelo:"Clio",
            ano:"2001"
          },
          {
            id: 3,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Toyota",
            modelo:"Corolla",
            ano:"2001"
          },
          {
            id: 4,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Audi",
            modelo:"A4",
            ano:"2001"
          },
          {
            id: 5,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Renault",
            modelo:"Clio",
            ano:"2001"
          },
          {
            id: 6,
            combustivel:"Diesel",
            src:"../imagensAgentes/imagens/RuiVieira.jpg",
            marca: "Toyota",
            modelo:"Corolla",
            ano:"2001"
          },
          
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
    justifyContent: "space-between",
    padding: "50px",
    flexWrap: "wrap",
    padding:"50px"
   }
   const headerStyle={
     textAlign:"center",
     fontSize:"50px",
     padding:"40px"
   }
  



export default Viaturas;