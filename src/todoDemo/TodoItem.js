import React, { Component } from 'react'
import PropTypes, { oneOfType } from 'prop-types'
class TodoItem extends Component {
  render () {
    const { index, handleDelete, item} = this.props
    return (
      <div key={index} onClick={(index) => {handleDelete(index)}}>{item}</div>
    )
  }
}

TodoItem.propTypes = {
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  item: oneOfType([PropTypes.string, PropTypes.number])
}
TodoItem.defaultProps = {
  index: 0,
  item: ''
}
export default TodoItem
