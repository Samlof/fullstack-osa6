import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = props => {
  useEffect(() => {
    anecdoteService
      .getAll().then(notes => props.initAnecdotes(notes))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initAnecdotes })(App)

