import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import AddHome from './AddHome'
import HomeList from './HomeList'
import Details from './Details'
import Provider from './context'

function App() {
  return (
    <>
      <h1>Home Tracker</h1>
      <div>
        <Link to='/'>
          Home
        </Link>
      </div>
      <div>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Link to='/contact'>Contact</Link>
      </div>
      <div>
        <Link to='/add-home'>Add Home</Link>
      </div>
      <div>
        <Link to='/home-list'>Home List</Link>
      </div>
      {/* <Provider> */}
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route 
            path='/add-home'
            element={<AddHome />}
          />
          <Route
            path='/home-list'
            element={<HomeList />}
          />
          <Route
            path='/details/:index'
            element={<Details />}
          />
        </Routes>
      {/* </Provider> */}
    </>
  )
}

export default App
