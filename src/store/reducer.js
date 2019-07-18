const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

export default (state = defaultState, action) => {
  console.warn(state, action)
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'handle_input_change') {
    newState.inputValue = action.value
  }
  if (action.type === 'handle_btn_click') {
    newState.list.push(action.value)
  }
  if (action.type === 'handle_item_click') {
    newState.list.splice(action.index, 1)
  }
  return newState
}
