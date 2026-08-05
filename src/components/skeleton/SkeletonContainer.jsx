import SkeletonCard from "./SkeletonCard"

const skdata = Array(9).fill(null);
const SkeletonContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
        {
            skdata.map((_, index) => {
                return <SkeletonCard key={index}/>
            })
        }
        
    </div>
  )
}

export default SkeletonContainer