import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor (){
    super();
    this.todoItems = [
      {title: 'Di da bong', isComplete: true}, 
      {title: 'Hoc Code Web', isComplete: false},
      {title: 'Tap the duc', isComplete: true} 
    ]
  }

  render(){
    return (
      <div className="App">
          {this.todoItems.length > 0 && this.todoItems.map((item,index) => 
            <TodoItem key={index} item={item}/>)}

          {this.todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
