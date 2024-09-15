import { createContext, useState } from 'react'

export const context = createContext()

export default function Provider (props) {
  const [agree, setAgree] = useState(false)
  const [homes, setHomes] = useState([])
  function addHome (address, price) {
    const home = { address, price }
    const newHomes = [...homes, home]
    setHomes(newHomes)
  }
  const value = { homes, addHome, agree, setAgree }
  return (
    <context.Provider value={value}>
      {props.children}
    </context.Provider>
  )
}