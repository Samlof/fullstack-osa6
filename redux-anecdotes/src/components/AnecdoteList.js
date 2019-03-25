import React from 'react';
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { change, remove } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (id, anec) => {
    props.voteFor(id)
    props.change("you voted'" + anec + "'")

    setTimeout(() => {
      props.remove()
    }, 3000);
  }

  return (
    <div>
      {
        props.anecsToShow.map(anecdote =>
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

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  const anecsToShow = [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    .filter(a => a.content.includes(state.filter))
  return {
    anecsToShow
  }
}

const mapDispatchToProps = {
  voteFor, change, remove
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
