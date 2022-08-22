import { ListOfComments } from "./listofComments";
import { UsefulButton } from "./usefulButton";
import { Comment } from "./comment";
import { useQuery } from "react-query";
import { CommunityDbModel } from "../models/CommunityModel";
import "./comment.scss";
import { Loading } from "../loading/loading";

const fetcher = () =>
  fetch("https://backend333.azurewebsites.net/Community").then((res) => res.json());

export const ListQuestions = () => {
  const { data, isLoading, refetch } = useQuery<CommunityDbModel[]>(
    "community",
    fetcher
  );

  async function handleComment() {
    console.log("Commented");
    await refetch();
  }
  async function handleCount() {
    console.log("Counted");
    await refetch();
  }
  return (
    <>
      {isLoading ? <Loading></Loading> : ""}
      <div className="outerBox">
        {!isLoading &&
          data?.map((element) => {
            return (
              <div className="innerBox" key={element.id}>
                <div className="questionBox">
                  <h4 className="commentH4">{element.question} </h4>
                  <div className="useful">
                    <UsefulButton
                      id={element.id??""}
                      onCount={() => {
                        handleCount();
                      }}
                    />
                    <p>{element.count}</p>
                  </div>
                </div>
                <div className="commentBox">
                  <ListOfComments comments={element.comment} />
                </div>
                <Comment
                  id={element.id??""}
                  onComment={() => {
                    handleComment();
                  }}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
