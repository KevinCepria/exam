import React, { useEffect, useState, useContext } from "react";
import json from "../../api/json";
import CommentForm from "./CommentForm";
import AppContext from "../../context/AppContext";


const CommentList = ({ questionId }) => {
  const [comments, setComments] = useState([]);
  const { selectedCandidate: { id: candidateId} } = useContext(AppContext)

  useEffect(() => {
    json
      .get("/comments", {
        params: { questionId, candidateId },
      })
      .then((res) => {
        setComments(res.data);
      });
  }, [candidateId, questionId]);

  const renderComments = comments.map(({ comment }) => (
    <div key={comment} className="comment">
      <div className="avatar">
        <img alt="avatar" src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon-thumb.png" />
      </div>
      <div className="content">
        <div className="author">User-HR</div>
        <div className="text">{comment}</div>
      </div>
    </div>
  ));
  return (
    <div className="ui comments">
      <h3 className="ui  header">Comments {comments.length}</h3>
      {renderComments}
      <CommentForm setComments={setComments} comments={comments} questionId={questionId} />
    </div>
  );
};

export default CommentList;
