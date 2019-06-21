import React, { Component } from 'react';
import Agentes from './components/Agentes';
import Multas from './components/Multas';
import Viaturas from './components/Viaturas';
import Esquadras from './components/Esquadras';
import Home from './components/Home';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import './App.css';


class App extends Component {
  

 
  render() {
    return (
      <Router>
      <div>
        <nav style={NavStyle}>         
            <div>
              <Link to="/"><button style={linkStyle}>Home</button></Link>
            </div>
            
            
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/Agentes/" component={Agentes} />
        <Route path="/Multas/" component={Multas} />
        <Route path="/Viaturas/" component={Viaturas} />
        <Route path="/Esquadras/" component={Esquadras} />
      </div>
    </Router>
    );
  }
}

const linkStyle={
  width: "200px",
height: "50px",
textAlign: "center",
fontSize: "35px",
backgroundColor: "steelblue",
borderRadius: "40px"
}

const NavStyle={
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "20px"
}

export default App;
