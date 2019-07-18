import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from '../store'
import { getInputChangeAction, getBtnClickAction, getItemClickAction } from '../store/actionCreators'
// 结合redux中的数据重新写TodoList
class TodoList extends Component {
  constructor (props) {
    super(props)
    // 首先state的数据应该是从redux中取
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  componentWillMount () {
    console.log(store)
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
    // 定义action
    const action = getInputChangeAction(inputValue)
    store.dispatch(action)
  }
  handleBtnClick () {
    const value = this.state.inputValue
    const action = getBtnClickAction(value)
    store.dispatch(action)
  }
  handleItemClick (index) {
    const action = getItemClickAction(index)
    store.dispatch(action)
  }
}

export default TodoList
