import { useContext, useState } from 'react'
import HomeForm from './HomeForm'
import { context } from './context'
import { useDispatch, useSelector } from 'react-redux'
import { AGREE } from './store'

export default function AddHome() {
  // const value = useContext(context)
  const dispatch = useDispatch()
  const agree = useSelector(state => state.agree)
  if (agree) {
    return <HomeForm />
  }
  function handleClick () {
    const action = {
      type: AGREE
    }
    dispatch(action)
  }
  return (
    <>
      <h2>Add Home</h2>
      <div>Do you agree to follow the terms?</div>
      <button onClick={handleClick}>Yes</button>
    </>
  )
}