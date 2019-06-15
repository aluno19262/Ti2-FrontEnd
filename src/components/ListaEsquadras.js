import React, { Component } from 'react';



class ListaEsquadras extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    console.log(this.props);
  }

  render() {
    return this.props.esquadra.map((esquadra) => (


      <div style={divStyle}>        
          <p>{esquadra.nome}</p>
          <p>{esquadra.localizacao}</p>
      </div >
        
      
    ));
  }
}

const divStyle = {
    display:"flex",
    flexDirection: "column",
    borderRadius: "20px",
    textAlign:"center",
    border:"1px solid black",
    padding:"10px"
}




export default ListaEsquadras;