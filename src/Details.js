import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from './context'
import { useSelector } from 'react-redux'

export default function Details () {
  const params = useParams()
  // const value = useContext(context)
  // const home = value.homes[params.index]
  const home = useSelector(state => state.homes[params.index])
  return (
    <>
      <h2>Details</h2>
      <h3>Address</h3>
      <div>{home.address}</div>
      <h4>Price</h4>
      <div>${home.price}</div>
    </>
  )
}