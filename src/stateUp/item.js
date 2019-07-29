// 子组件
import React, { Component } from 'react'

class Item extends Component {
  // constructor (props) {
  //   super(props)
  //   // this.handleChange = this.handleChange.bind(this)
  // }f
  render () {
    const { name, itemvalue, change} = this.props
    return (
      <fieldset>
        <input type="number" onChange={(e) => {change(e.target.value)}} value={name === 'minus' ? itemvalue / 2 : itemvalue} name={name} />
        {/* <input type="number" onChange={(e) => {change(e.target.value)}} value={name === 'minus' ? itemvalue / 2 : itemvalue} name={name} /> */}
        {/* <input type="number" onChange={change} value={name === 'minus' ? itemvalue / 2 : itemvalue} name={name} /> */}
      </fieldset>
    )
  }
  // handleChange (e) {
  //   this.props.change(e.target.value)
  // }
}

export default Item
