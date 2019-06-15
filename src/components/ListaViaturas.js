import React, { Component } from 'react';



class ListaViaturas extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    console.log(this.props);
  }

  render() {
    return this.props.viatura.map((viatura) => (

      <div style={divStyle}>
        <button style={btnStyle}>
        <li style={liStyle}>
          <img src={viatura.src} alt=""></img>
          <p>Marca: {viatura.marca}</p>
          <p>Modelo: {viatura.modelo}</p>
          <p>Ano: {viatura.ano}</p>
          <p>Combustivel: {viatura.combustivel}</p>
        </li>
      </button>
      </div>
      
        
      
    ));
  }
}

const liStyle = {
  borderBottom: "1px solid gray",
  fontSize: "20px",
  padding: "15px 15px 20px 20px",
  position: "relative",
  listStyleType: "none"
}
const btnStyle={
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#e3e7ed",
  padding:"10px"
}
const divStyle={
  padding:"20px"
}


export default ListaViaturas;