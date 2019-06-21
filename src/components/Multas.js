import React, { Component } from 'react';
import ListaMultas from './ListaMultas.js';







class Multas extends Component {
  state = {
    isLoaded:false,
    multa: null
    
  }
  

  componentDidMount() {
    fetch('http://localhost:5000/api/values/Multas')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        isLoaded:true,
        multa: data
       })
      console.log(this.state.multa)
    })
    
    .catch(console.log)
  }




  render() {
    if(!this.state.isLoaded){
      return <div>Loading...</div>
    }else{
      return (
      <div className="App">
        <header style={headerStyle}>Lista de Multas</header>
          <div style={divStyle}>
              <ListaMultas key={"multa"+this.state.multa.id} multa={this.state.multa}/>
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
    flexWrap: "wrap"
   }
   const headerStyle={
     textAlign:"center",
     fontSize:"50px",
     padding:"40px"
   }
  



export default Multas;