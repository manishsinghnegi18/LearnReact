import React, { Component } from 'react';
class Person extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="user">
                <h1>My Name is {this.props.name} and My Age is {this.props.age}</h1>
                <h1>{this.props.children}</h1>
            </div>
         );
    }
}
 
export default Person;