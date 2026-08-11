import {Categories, VideoContainer} from '../index';

const MainContainer = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <Categories />
        </div>
        <div className='m-auto'>
            <VideoContainer />
        </div>

    </div>
  )
}

export default MainContainer