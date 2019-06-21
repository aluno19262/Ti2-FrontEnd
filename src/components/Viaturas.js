import React, { Component } from 'react';
import ListaViaturas from './ListaViaturas.js';


class Viaturas extends Component {
  state = {
    isLoaded:false,
    viatura: null
    
  }
  

  componentDidMount() {
    fetch('http://localhost:5000/api/values/Viaturas')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        isLoaded:true,
        viatura: data
       })
      console.log(this.state.viatura)
    })
    
    .catch(console.log)
  }



  render() {
    if(!this.state.isLoaded){
      return <div>Loading...</div>;
    }else{
       return (
      <div className="App">
        <header style={headerStyle}>Lista de Viaturas</header>
          <div style={divStyle}>
              <ListaViaturas key={"viatura"+this.state.viatura.id} viatura={this.state.viatura}/>
          </div>
      </div>
    );
  }
    }
   
}

const divStyle={
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    flexWrap: "wrap",
   }
   const headerStyle={
     textAlign:"center",
     fontSize:"50px",
     padding:"40px"
   }
  



export default Viaturas;