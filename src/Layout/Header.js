import React, { Component } from 'react';


export class Header extends Component {

    render() {
        //console.log(todo);
        return (
          <div >
              
           
            <p>Chegou aqui e tenho o id {this.props.todos} </p>
            
          </div>
        )
      }

}


export default Header;