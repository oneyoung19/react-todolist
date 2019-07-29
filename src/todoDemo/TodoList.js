import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import { SearchBox, SearchResult, SearchButton } from './style'
import store from './store/index'
import { getInputChangeAction, getBtnClickAction, getItemDelete } from './store/actionCreators'

class TodoList extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   inputValue: 'abc',
    //   list: [1, 2, 3]
    // }
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render () {
    return (
      <Fragment>
        <SearchBox className="searchBox">
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <SearchButton onClick={this.handleBtnClick}>确定</SearchButton>
        </SearchBox>
        <SearchResult className="searchResult">
          {
            this.state.list.map((item, index) => {
              // return <div key={index} onClick={(index) => {this.handleDelete(index)}}>{item}</div>
              return <TodoItem key={index} index={index} handleDelete={this.handleDelete} item={item}/>
            })
          }
        </SearchResult>
      </Fragment>
    )
  }
  handleInputChange (e) {
    const value = e.target.value
    const action = getInputChangeAction(value)
    store.dispatch(action)
    // this.setState({
    //   inputValue
    // })
  }
  handleBtnClick () {
    const value = this.state.inputValue
    const action = getBtnClickAction(value)
    store.dispatch(action)
    // const list = [...this.state.list]
    // list.push(value)
    // this.setState({
    //   list
    // })

  }
  handleDelete (index) {
    const action = getItemDelete(index)
    store.dispatch(action)
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list
    // })
  }
}

export default TodoList
