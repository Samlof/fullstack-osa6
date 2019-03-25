import anecdoteService from "../services/anecdotes";

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anec = state.find(a => a.id === id)
      const newAnec = { ...anec, votes: anec.votes + 1 }
      return state.map(a => a.id === id ? newAnec : a)
    }
    case 'CREATE_ANECDOTE': {
      return state.concat(action.data)
    }
    case 'INIT_ANECDOTE': {
      return action.data
    }
    default:
      return state
  }
}

export const voteFor = updated => {
  return async dispatch => {
    const newUpdated = { ...updated, votes: updated.votes + 1 }
    const data = await anecdoteService.update(newUpdated)
    dispatch({
      type: 'VOTE',
      data
    })
  }
}
export const initAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data
    })
  }
}


export const createAnecdote = content => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data
    })
  }
}

export default reducer