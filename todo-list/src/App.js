import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor (){
    super();
    this.todoItems = ['Di da bong', 'Hoc Code Web', 'Tap the duc']
  }

  render(){
    return (
      <div className="App">
          {this.todoItems.map((item,index) => <TodoItem key={index} title={item}/>)}
      </div>
    );
  }
}

export default App;
