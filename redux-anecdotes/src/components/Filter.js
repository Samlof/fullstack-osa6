import React from 'react'
import { change } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    const filter = event.target.value
    props.store.dispatch(change(filter))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter