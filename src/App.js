import React, { Component } from 'react';
import ListaAgentes from './components/ListaAgentes';
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
              <Link to="/ListaAgentes/">About</Link>
            </div>
            <div>
              <Link to="/users/">Users</Link>
            </div>
          
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/ListaAgentes/" component={ListaAgentes} />
        {/* <Route path="/Home/" component={Home} /> */}
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
