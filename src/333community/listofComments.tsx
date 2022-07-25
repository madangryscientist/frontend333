import { CommunityCommentDbModel } from "../models/CommunityModel";

interface ListOfCommentsProps {
  comments: CommunityCommentDbModel[];
}

export const ListOfComments = ({ comments }: ListOfCommentsProps) => {
  return (
    <div>
      {comments?.map((comment) => {
        return (
          <div className="commentsList" key={comment.id}>
            <p>{comment.comment} </p>
          </div>
        );
      })}
    </div>
  );
};
