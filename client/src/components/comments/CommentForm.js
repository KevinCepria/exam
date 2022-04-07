import React, { useState } from "react";
import json from "../../api/json";

const CommentForm = ({ questionId, setComments, comments, candidateId }) => {
  const [comment, setComment] = useState("");
  const [ isFetching, setIsFetching ] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsFetching(true)
    json.post("/comments", {
        questionId,
        comment,
        candidateId
      })
      .then((res) => {
        setComments([...comments, res.data])
        setComment('');
      })
      .finally(() => setIsFetching(false))
  };

  return (
    <form onSubmit={onSubmit} className="ui reply form">
      <div className="field">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment here"
        />
      </div>
      <button disabled={isFetching} type="submit" className="ui blue labeled submit icon button">
        <i className="icon comment"></i> Comment
      </button>
    </form>
  );
};

export default CommentForm;
