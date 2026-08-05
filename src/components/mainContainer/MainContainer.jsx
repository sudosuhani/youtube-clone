import {Categories, VideoContainer} from '../index';

const MainContainer = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <Categories />
        </div>
        <div>
            <VideoContainer />
        </div>

    </div>
  )
}

export default MainContainer