import React from 'react'
import Header from './components/Header';
import Productfeed from './components/Productfeed';
import './output.css'

const App = () => {
  return (
    <div className='bg-black max-w-screen'>
      <Header/>
      <Productfeed/>
    </div>
  )
}

export default App
