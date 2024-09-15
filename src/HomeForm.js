import { useContext, useState } from 'react'
import { context } from './context'
import { useDispatch } from 'react-redux'
import { ADD_HOME } from './store'

export default function HomeForm() {
  const dispatch = useDispatch()
  // const value = useContext(context)
  const [address, setAddress] = useState('')
  function handleAddressChange(event) {
    setAddress(event.target.value)
  }
  const [price, setPrice] = useState('')
  function handlePriceChange(event) {
    setPrice(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    // value.addHome(address, price)
    const action = {
      type: ADD_HOME,
      payload: {
        address,
        price
      }
    }
    dispatch(action)
  }
  return (
    <>
      <h2>Add Home</h2>
      <form onSubmit={handleSubmit}>
        <h3>Address</h3>
        <input value={address} onChange={handleAddressChange} />
        <h3>Price</h3>
        <input value={price} onChange={handlePriceChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}