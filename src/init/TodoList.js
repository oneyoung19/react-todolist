import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'abc',
      list: [1,2,3]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  render () {
    return (
      <Fragment>
        <div>
          <input type="text" value={ this.state.inputValue } style={{ width: '200px' }} onChange={ this.handleInputChange }/>
          <button onClick={ this.handleBtnClick }>确定</button>
        </div>
        <div>
          {
            this.state.list.map((item, index) => {
              return <div key={ index } style={{ width: '200px', backgroundColor: '#ccc' }} onClick={ () => {this.handleItemClick(index)} }>{ item }</div>
            })
          }
        </div>
      </Fragment>
    )
  }
  handleInputChange (e) {
    // 在input中输入值时，将state中的数据进行更改
    const inputValue = e.target.value
    this.setState({
      inputValue
    })
  }
  handleBtnClick () {
    // 确定按钮点击时，将state中的inputValue添加到list中
    // const inputValue = this.state.inputValue
    // this.setState({
    //   list: [...this.state.list, inputValue]
    // })

    // setState的参数也可以是函数  函数的返回值必须是state
    this.setState((newState) => {
      newState.list.push(newState.inputValue)
      return newState
    })
  }
  handleItemClick (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
