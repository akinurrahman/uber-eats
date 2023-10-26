import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadLineCards from './components/HeadLineCards'
import Menu from './components/Menu'
import Category from './components/Category'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <Menu/>
      <Category/>
    </div>
  )
}

export default App
