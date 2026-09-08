import Sidebar from './sidebar/Sidebar'
import {MainContainer } from './index'

const Home = () => {
  return (
    <div className='flex h-full'>
      <div className='hidden md:block px-1 h-full'>
        <Sidebar />
      </div>
      <div className='px-1 sm:px-4 w-full md:w-[90%] mt-12'>
        <MainContainer />
      </div>
    </div>
  )
}

export default Home