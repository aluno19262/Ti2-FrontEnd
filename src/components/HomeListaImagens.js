import React, { Component } from 'react';



class HomeListaImagens extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }
  render() {
    return this.props.lista.map((lista) => (
      
      <a  key={"a"+lista.id} href={"/"+lista.nome+"/"}>
        <div  key={"div"+lista.id} style={DivStyle}>
          <p key={"p1"+lista.id} style={pStyle}> {lista.nome} </p>
          <img style={imgStyle} key={lista.id} src={lista.src} alt="P"></img>
          <p  key={"p2"+lista.id}style={pStyle}> {lista.nome} </p>
        </div>
      </a>
    ));
  }
}




const DivStyle = {
  display: "flex",
  background: '#909090',
  flexDirection: "column",
}

const imgStyle = {
  width: "150px",
  height: "150px",
  margin:"10px"

}


const pStyle = {
  textAlign:"center"
    }
export default HomeListaImagens;