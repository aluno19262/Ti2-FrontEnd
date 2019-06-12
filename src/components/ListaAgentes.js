import React, { Component } from 'react';
import Todos from './Todos';
import Header from './Header';






class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        src: "./imagensAgentes/imagens/AndreSilveira.jpg",
        nome: "André Silveira",
        descricao: "Este é o "
      },
      {
        id: 2,
        src: "./imagensAgentes/imagens/AntonioRocha.jpg",
        nome: "António Rocha",
        descricao: "Este é o "
      },
      {
        id: 3,
        src: "./imagensAgentes/imagens/JoseAlves.jpg",
        nome: "José Alves",
        descricao: "Este é o "
      }
    ]
  }




  render() {
    return (
      <div className="App">
        <Header  key={this.state.todos.id} todos={this.state.todos} />
        <div style={divStyle}>
          <Todos key={this.state.todos.id} todos={this.state.todos} />
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





export default App;