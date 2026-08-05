import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import QueueIcon from '@mui/icons-material/Queue';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='mt-11'>
        <SidebarItem Icon={HomeIcon} title={'Home'} />
        <SidebarItem Icon={YouTubeIcon} title={'Shorts'} />
        <SidebarItem Icon={SubscriptionsIcon} title={'Subscriptions'} />
        <SidebarItem Icon={QueueIcon} title={'You'} />
    </div>
  )
}

export default Sidebar