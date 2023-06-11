import React from 'react'
import { useParams } from 'react-router-dom'
const SingleMovies = () => {
  let {id} = useParams ();
  return (
    <div>Hello Friends {id}</div>
  )
}

export default SingleMovies 