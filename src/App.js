import { useState } from 'react'

function App() {
  const [homes, setHomes] = useState([])
  const [address, setAddress] = useState('')
  function handleAddressChange (event) {
    setAddress(event.target.value)
  }
  const [price, setPrice] = useState('')
  function handlePriceChange (event) {
    setPrice(event.target.value)
  }
  function handleSubmit (event) {
    // event.preventDefault()
    const home = { address, price }
    console.log('home', home)
    const newHomes = [...homes, home]
    setHomes(newHomes)
  }
  const rows = homes.map(home => {
    return (
      <tr>
        <td>{home.address}</td>
        <td>${home.price}</td>
      </tr>
    )
  })
  return (
    <>
      <h1>Home Tracker</h1>
      <form onSubmit={handleSubmit}>
        <h3>Address</h3>
        <input value={address} onChange={handleAddressChange} />
        <h3>Price</h3>
        <input value={price} onChange={handlePriceChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <h2>Homes</h2>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )
}

export default App
