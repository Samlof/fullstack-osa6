const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return action.filter
    }
    default:
      return state
  }
}

export const change = message => {
  return {
    type: 'CHANGE_FILTER',
    filter: message
  }
}

export default reducer