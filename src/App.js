import './App.css';
import React, { Component } from 'react';
import Person from "./Component/Person/PersonComponent";

class App extends Component {
  state={
      persons:[
        {name:'Manish Singh Negi',age:27},
        {name:'Ankit Negi',age:20}
      ]
    }
    swithNameHandler=()=>
    {
      console.warn('THis is working')
    }
  render() { 
    return (  
      <div className="App">
        <h1>Hi I am React</h1>
        <p>This is Manish Singh Negi</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbie's are Playing Cricket</Person>
        <button onClick={this.swithNameHandler}>Switch</button>

      </div>
    );
  }
}
 
export default App;
