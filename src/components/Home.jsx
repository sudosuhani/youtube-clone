import Sidebar from './sidebar/Sidebar'
import MainContainer from './mainContainer/MainContainer'

const Home = () => {
  return (
    <div className='flex w-screen'>
      <div className='px-1 h-screen '>
        <Sidebar />
      </div>
      <div className='px-4'>
        <MainContainer />
      </div>
    </div>
  )
}

export default Home