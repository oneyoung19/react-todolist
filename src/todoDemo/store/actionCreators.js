import { INPUT_CHANGE, BTN_CLICK, ITEM_DELETE} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value
})

export const getBtnClickAction = (value) => ({
  type: BTN_CLICK,
  value
})

export const getItemDelete = (value) => ({
  type: ITEM_DELETE,
  value,
  toJSON: function () {
    return { ...this, event: '[Event]' }
  }

})
