import { INPUT_CHANGE, BTN_CLICK, ITEM_DELETE} from './actionTypes'

const defaultValue = {
  inputValue: 'abc',
  list: [1, 2, 3]
}

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === INPUT_CHANGE) {
    newState.inputValue = action.value
    return newState
  }
  if (action.type === BTN_CLICK) {
    newState.list.push(action.value)
    return newState
  }
  if (action.type === ITEM_DELETE) {
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}
