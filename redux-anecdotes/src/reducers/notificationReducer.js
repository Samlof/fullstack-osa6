const initialState = ''

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


export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'CHANGE_NOTIFICATION',
      notification: message
    })
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    }, seconds * 1000)
  }
}

export default reducer