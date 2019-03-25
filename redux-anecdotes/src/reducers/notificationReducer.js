const initialState = 'testi viesti'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION': {
      return action.notification
    }
    case 'REMOVE_NOTIFICATION': {
      return ''
    }
    default:
      return state
  }
}

export const change = message => {
  return {
    type: 'CHANGE_NOTIFICATION',
    notification: message
  }
}

export const remove = anecdote => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default reducer