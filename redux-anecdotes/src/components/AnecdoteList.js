import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'
import { change, remove } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const { anecdotes, filter } = props.store.getState()

  const vote = (id, anec) => {
    props.store.dispatch(voteFor(id))
    props.store.dispatch(change("you voted'" + anec + "'"))

    setTimeout(() => {
      props.store.dispatch(remove())
    }, 3000);
  }

  const anecsToShow = [...anecdotes].sort((a, b) => b.votes - a.votes)
    .filter(a => a.content.includes(filter))
  return (
    <div>
      {
        anecsToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList
