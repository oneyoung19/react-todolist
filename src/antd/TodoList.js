import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'abc',
      list: [1, 2, 3]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  render () {
    // render函数必须是纯函数，也就是说render函数不能改变外部state
    return (
      <Fragment>
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
          <Input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="todo list" style={{width: '200px', marginRight: '10px'}}/>
          <Button type="primary" onClick={this.handleBtnClick}>确定</Button>
        </div>
        <List
          style={{width: '400px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {this.handleItemClick(index)}}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
  handleInputChange (e) {
    // 将e.target.value赋值给state中inputValue
    const inputValue = e.target.value
    this.setState({
      inputValue
    })
  }
  handleBtnClick () {
    // 点击时，将inputValue加入到list中
    const list = [...this.state.list]
    list.push(this.state.inputValue)
    this.setState({
      list
    })
  }
  handleItemClick (index) {
    const list =[...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
