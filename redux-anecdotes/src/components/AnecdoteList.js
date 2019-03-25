import React from 'react';
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anec) => {
    props.voteFor(anec)
    props.setNotification("you voted'" + anec.content + "'", 3)
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
              <button onClick={() => vote(anecdote)}>vote</button>
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
  voteFor, setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
