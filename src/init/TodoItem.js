import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    const { index, item, handleItemClick } = this.props
    return (
      <div key={ index } style={{ width: '200px', backgroundColor: '#ccc' }} onClick={ handleItemClick } >{ item } --- { index }</div>
    )
  }
}

export default TodoItem
