import React, { Fragment } from 'react'
import TodoItem from './TodoItem'
import { SearchBox, SearchResult, SearchButton } from './style'

function TodoListUI (props) {
  const { inputValue,handleInputChange, handleBtnClick, list, handleDelete } = props
  return (
    <Fragment>
      <SearchBox className="searchBox">
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <SearchButton onClick={handleBtnClick}>确定</SearchButton>
      </SearchBox>
      <SearchResult className="searchResult">
        {
          list.map((item, index) => {
            // return <div key={index} onClick={(index) => {handleDelete(index)}}>{item}</div>
            return <TodoItem key={index} index={index} handleDelete={handleDelete} item={item}/>
          })
        }
      </SearchResult>
    </Fragment>
  )
}

export default TodoListUI
