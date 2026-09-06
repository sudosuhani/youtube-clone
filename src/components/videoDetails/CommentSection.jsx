import {Comment} from "../index"

/* eslint-disable react/prop-types */
const CommentSection = ({topLevelComments}) => {
  return (
    <div>
      <h2 className="font-bold text-[22px]">Comments</h2>
      {
        topLevelComments.map((comment) => <Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}

export default CommentSection