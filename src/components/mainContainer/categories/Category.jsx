/* eslint-disable react/prop-types */

const Category = ({title}) => {
  return (
    <div className='bg-[#0F0F0F] cursor-pointer hover:bg-[#3F3F3F] transition-all px-4 py-2 rounded-lg'>{title}</div>
  )
}

export default Category