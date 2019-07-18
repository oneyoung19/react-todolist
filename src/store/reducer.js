import { HANDLE_INPUT_CHANGE, HANDLE_BTN_CLICK, HANDLE_ITEM_CLICK} from '../store/actionTypes'

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}

export default (state = defaultState, action) => {
  console.warn(state, action)
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === HANDLE_INPUT_CHANGE) {
    newState.inputValue = action.value
  }
  if (action.type === HANDLE_BTN_CLICK) {
    newState.list.push(action.value)
  }
  if (action.type === HANDLE_ITEM_CLICK) {
    newState.list.splice(action.value, 1)
  }
  return newState
}
