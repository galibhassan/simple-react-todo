import React from 'react'

class ToDoList extends React.Component {

  constructor(props){
    super(props)
    this.handleOnclick = this.handleOnclick.bind(this)
  }

  handleOnclick = (doneIndex) => {
    this.props.removeDone(doneIndex)
  }

  render() {
    return (
      <div>
        <ul>
          {(this.props.mainState.todoList).map((item, index) => {
            return (
              <li key={index} style={styles.listItem}>
                <button style={styles.xButton} onClick={()=>{this.props.removeDone(index)}} > X </button>
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ToDoList

const styles = {
  listItem: {
    boxShadow: '1px 1px 20px 1px rgba(0,0,0,.1)',
    padding: 10,
    margin: 5,
    listStyleType: 'none',
    width:'30%',
    borderRadius: 5
  },
  xButton: {
    border: 'none',
    backgroundColor: 'pink',
    padding: 10,
    marginRight: 3, 
    cursor: 'pointer',
    color: 'white',
    float: 'right',
    borderRadius: 5

  }
}