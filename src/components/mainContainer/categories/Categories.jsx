import Category from './Category'
import { categoryList } from '../../../utils/constants'
const Categories = () => {
  return (
    <div className='flex w-full px-4 gap-x-2 whitespace-nowrap overflow-x-auto no-scrollbar pb-2'>
        {
            categoryList.map((item) => <Category key={item} title={item}/>)
        }
        
    </div>
  )
}

export default Categories