import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui containter comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice!"
          imga={
            "https://i.pinimg.com/originals/60/4c/f8/604cf86d3a59da3b75a09d17e224f5f1.jpg"
          }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:59PM"
          comment="Nice post!"
          imga={
            "https://pa1.narvii.com/6604/e1aafd6a255b485e4cbb4ddb3213bb46b95b6486_00.gif"
          }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 5:12PM"
          comment="Nice post brah!"
          imga={"https://data.whicdn.com/images/320966807/original.jpg"}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
