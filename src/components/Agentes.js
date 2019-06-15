import React, { Component } from 'react';
import ListaAgentes from './ListaAgentes';
import Header from './Header';







class App extends Component {

  state = {
    agente: [
      {
        id: 1,
        src: "../imagensAgentes/imagens/AndreSilveira.jpg",
        nome: "André Silveira",
        descricao: "Este é o "
      },
      {
        id: 2,
        src: "../imagensAgentes/imagens/AntonioRocha.jpg",
        nome: "António Rocha",
        descricao: "Este é o "
      },
      {
        id: 3,
        src: "../imagensAgentes/imagens/JoseAlves.jpg",
        nome: "José Alves",
        descricao: "Este é o "
      }
    ]
  }
 



  render() {
    return (
      <div className="App" >
        <Header  key={this.state.agente.id} agente={this.state.agente} />
        
          <div style={divStyle}>
            
              <ListaAgentes key={this.state.agente.id} agente={this.state.agente} />
            
          </div>
        
          

          


      </div>
    );
  }
}
 const divStyle={
  display: "flex",
  justifyContent: "space-evenly",
  padding: "50px",
 }






export default App;