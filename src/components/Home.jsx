import Sidebar from './sidebar/Sidebar'
import {MainContainer } from './index'

const Home = () => {
  return (
    <div className='flex overflow-x-hidden h-full'>
      <div className='px-1 h-full'>
        <Sidebar />
      </div>
      <div className='px-4 w-full mt-12'>
        <MainContainer />
      </div>
    </div>
  )
}

export default Home