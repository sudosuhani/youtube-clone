import React from 'react'
import Sidebar from './sidebar/Sidebar'
import MainContainer from './mainContainer/MainContainer'

const Home = () => {
  return (
    <div className='flex'>
      <div className='flex  px-4 bg-red-300'>
        <Sidebar />
      </div>
      <div className='flex  px-4'>
        <MainContainer />
      </div>
    </div>
  )
}

export default Home