import React, { Component } from 'react';



class Header extends Component {
    
  render() {
    return (
    <div>
        <header style={HeaderStyle}>Lista de Agentes</header>
    </div>
    )
  }
}

const HeaderStyle= {
    position:"relative",
    overflow:"hidden",
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    height:"100px",
    minWidth:"300px",
    paddingTop: "50px",
    fontSize: "50px"
   
  }
  


export default Header;