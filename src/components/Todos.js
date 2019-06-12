import React, { Component } from 'react';



class Todos extends Component {
    
  render() {
    return this.props.todos.map((todo) => (
        <div style={DivStyle}>
        <p> {todo.nome} </p>
        <img style={imgStyle} key={todo.id} src={todo.src} alt="P"></img>
        <p> {todo.descricao}{todo.nome} </p>
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
export default Todos;