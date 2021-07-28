import React from 'react'
import { useDispatch } from 'react-redux'
import { loadData } from '../../redux/actions/Login'

const Home = () => {
  const dispatch = useDispatch()

  const onHandleClick = () => dispatch(loadData())

  return (
    <div>
      <button type="button" onClick={onHandleClick}>
        Click Me
      </button>
    </div>
  )
}

export default Home
