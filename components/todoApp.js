import React from 'react';
import ToDoList from './todoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.removeDone = this.removeDone.bind(this);
    this.state = {
      todoList: [],
    }
  }

  removeDone = (doneIndex) => {
    this.setState((prevState) => {
      prevState.todoList.splice(doneIndex, 1);
      return prevState;
    })
  }

  addChoresToState = () => {
    const txtInput = document.getElementById('txtInput');
    console.log(txtInput.value)
    this.setState((prevState)=>{
      prevState.todoList.push(txtInput.value);
      txtInput.value = '';
      return prevState;
    });
  }

  handleOnClick = () => {
    this.addChoresToState()
  }
  
  handleKeyDown = (event) => {
    if(event.key==='Enter') {
      this.addChoresToState()
    }
  }

  render() {
    return (
      <div style={styles}>
        <h3>ToDo's</h3>
        <input id='txtInput' type='text' placeholder='enter..' onKeyDown={this.handleKeyDown}></input>
        <button onClick={this.handleOnClick}>+</button>
        <ToDoList mainState={this.state} removeDone={this.removeDone}/>
      </div>
    )
  }
}
export default TodoApp

const styles = {
  marginLeft: '200px'
}
