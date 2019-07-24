// 状态提升
import React, { Component } from 'react'
import Item from './item.js'
class container extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 10
    }
  }
  render () {
    return (
      <div>
        <Item itemvalue={this.state.value} change={this.handleChange}></Item>
        <Item name="minus" itemvalue={this.state.value}></Item>
      </div>
    )
  }
  handleChange (value) {
    console.log(11111)
    // 改变state的值
    this.setState({
      value
    })
  }
}

export default container
