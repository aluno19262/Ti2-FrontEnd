import React, { Component } from 'react';
import Todos from './components/Todos';
import ListaAgentes from './components/ListaAgentes';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";




import './App.css';



function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {

 
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListaAgentes/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/ListaAgentes/" component={ListaAgentes} />
      </div>
    </Router>
    );
  }
}

export default App;
