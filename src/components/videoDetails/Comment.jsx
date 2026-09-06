/* eslint-disable react/prop-types */

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Comment = ({ comment }) => {
  const commentData = comment?.snippet?.topLevelComment?.snippet;
  const totalReplyCount = comment?.snippet?.totalReplyCount;
  return (
    <div className="my-4">
      <div className="flex">
        <img
          className="rounded-full h-10 mt-1 items-center"
          src={commentData?.authorProfileImageUrl}
          alt="logo"
        />
        <div className="ml-4">
          <p className="font-semibold tracking-wider text-sm">
            {commentData?.authorDisplayName}
          </p>
          <div>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: commentData?.textDisplay }}
            />
          </div>
          {totalReplyCount > 0 && (
            <div className="text-[#3EA6FF] flex items-center mt-1 cursor-pointer hover:bg-[#263850] w-fit px-4 py-1 rounded-xl transition-all">
              <KeyboardArrowDownIcon style={{ fontSize: 30 }} />
              <p className="font-[600]">{`${totalReplyCount} ${
                totalReplyCount > 1 ? "replies" : "reply"
              } `}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
