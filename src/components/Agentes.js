import React, { Component } from 'react';
import ListaAgentes from './ListaAgentes';
import Header from './Header';







class Agentes extends Component {
  state = {
    isLoaded:false,
    agente: null
    
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/api/values/Agentes')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        isLoaded:true,
        agente: data
       })
      console.log(this.state.agente)
    })
    
    .catch(console.log)
  }

  render() {
    if(!this.state.isLoaded){
      return <div>Loading...</div>
    }else{
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
    
}
 const divStyle={
  display: "flex",
  justifyContent: "space-evenly",
  padding: "50px",
  flexWrap:"wrap"
 }

export default Agentes;