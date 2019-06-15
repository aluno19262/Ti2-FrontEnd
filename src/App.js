import React, { Component } from 'react';
import Agentes from './components/Agentes';
import Multas from './components/Multas';
import Viaturas from './components/Viaturas';
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
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/Agentes/">Agentes</Link>
            </div>
            <div>
              <Link to="/Multas/">Multas</Link>
            </div>     
            <div>
              <Link to="/Viaturas/">Viaturas</Link>
            </div>    
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/Agentes/" component={Agentes} />
        <Route path="/Multas/" component={Multas} />
        <Route path="/Viaturas/" component={Viaturas} />
      </div>
    </Router>
    );
  }
}
const NavStyle={
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "20px"
}

export default App;
