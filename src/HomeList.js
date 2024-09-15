import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './context'
import { useSelector } from 'react-redux'

export default function HomeList() {
  console.log('HomeList is rendering...')
  const homes = useSelector((state) => state.homes)
  // const value = useContext(context)
  const rows = homes.map((home, index) => {
    const path = `/details/${index}`
    return (
      <tr key={index}>
        <td>
          <Link to={path}>
            {home.address}
          </Link>
        </td>
        <td>${home.price}</td>
      </tr>
    )
  })
  return (
    <>
      <h2>Home List</h2>
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