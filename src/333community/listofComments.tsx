import { CommunityCommentDbModel } from "../models/CommunityModel";
import "./comment.scss";

interface ListOfCommentsProps {
  comments: CommunityCommentDbModel[];
}

export const ListOfComments = ({ comments }: ListOfCommentsProps) => {
  return (
    <div className="scroll">
      <div className="commentHead">Comments</div>
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
