import React, { Component } from 'react';



class ListaViaturas extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    console.log(this.props);
  }

  render() {
    return this.props.viatura.map((viatura) => (


      <div>
        <li style={liStyle}>
          <p>Numero de Viaturas: {viatura.id}</p>
          <p>Motivo: {viatura.nome}</p>
          <p>Descrição: {viatura.descricao}</p>
        </li>
      </div >
        
      
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




export default ListaViaturas;