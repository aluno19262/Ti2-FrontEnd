import React, { Component } from 'react';



class Todos extends Component {
    
  render() {
    return this.props.todos.map((todo) => (
      <a href="/" >
        <div style={DivStyle}>
        <p style={pStyle}> {todo.nome} </p>
        <img style={imgStyle} key={todo.id} src={todo.src} alt="P"></img>
        <p style={pStyle}> {todo.descricao}{todo.nome} </p>
        </div>
      </a>
    ));
  }
}



const DivStyle = {
    display: "flex",
    background: '#909090',
    flexDirection: "column",
    width:"fit-content",
    height:"fit-content",
  }

  const imgStyle = {
    width:"150px",
    height:"150px",
    margin:"10px"
    
  }

  const pStyle = {
textAlign:"center"
  }
export default Todos;