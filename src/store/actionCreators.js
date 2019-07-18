import { HANDLE_INPUT_CHANGE, HANDLE_BTN_CLICK, HANDLE_ITEM_CLICK  } from './actionTypes'

export const getInputChangeAction = (value) => {
  const action = {
    type: HANDLE_INPUT_CHANGE,
    value
  }
  return action
}

export const getBtnClickAction = (value) => {
  const action = {
    type: HANDLE_BTN_CLICK,
    value
  }
  return action
}

export const getItemClickAction = (value) => {
  const action = {
    type: HANDLE_ITEM_CLICK,
    value
  }
  return action
}
