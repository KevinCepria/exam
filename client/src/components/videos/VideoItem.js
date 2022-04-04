import React, { useEffect, useState } from "react";
import json from "../../api/json";
import CommentList from "../comments/CommentList";

const VideoItem = ({ video }) => {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    json
      .get("/questions", {
        params: {
          id: video.questionId,
        },
      })
      .then((res) => {
        setQuestion(res.data[0]);
      });
  }, [video.questionId]);

  return (
    <div className="ui segment">
      <div className="ui embed" style={{ marginBottom: "20px" }}>
        <iframe title="video player" src={video.src} />
      </div>
      <div className="ui relaxed" style={{ paddingBottom: "20px" }}>
        <h4 className="ui header medium">Question: {question.question}</h4>
      </div>
      <CommentList questionId={video.questionId} />
    </div>
  );
};

export default VideoItem;
