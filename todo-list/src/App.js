import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/todoItem';
import CompleteImg from './img/completeAll.svg';

class App extends Component {
  constructor (){
    super();
    this.state = {
      todoItems:[
        {title: 'Hoc Code Web', isComplete: false},
        {title: 'Tap the duc', isComplete: true} 
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onItemClicked(item){
    
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
      // this.setState({
      //   todoItems: [...todoItems.map((item)=>{
      //     if(todoItems.indexOf(item) === index){
      //       item.isComplete = !isComplete
      //     }
      //     return item
      //   })]
      // })
      
    }
  }

  onKeyUp(event){
    // console.log(event.keyCode)
    if(event.keyCode === 13){
      const value = event.target.value;
      const {todoItems} = this.state;
      this.setState({
        newItem: '',
        todoItems: [
          {
            title: value,
            isComplete: false
          },
          ...todoItems
        ],
      })
      
    }    
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  
  render(){
    const {todoItems,newItem} = this.state;
    return (
      <div className="App">
          <div className="Header">
            <img src = {CompleteImg} alt="completeAll-icon" width={32} height={32}/>
            <input type="text" 
              placeholder="What needs to be done?" 
              onKeyUp={this.onKeyUp}
              value={newItem}
              onChange={this.onChange}
            />
          </div>
          {todoItems.length > 0 && todoItems.map((item,index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>)}
          {todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
