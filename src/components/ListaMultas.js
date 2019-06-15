import React, { Component } from 'react';



class ListaMultas extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    console.log(this.props);
  }

  render() {
    return this.props.multa.map((multa) => (


      <div>
        <li style={liStyle}>
          <p>Numero de Multa: {multa.id}</p>
          <p>Motivo: {multa.nome}</p>
          <p>Descrição: {multa.descricao}</p>
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




export default ListaMultas;