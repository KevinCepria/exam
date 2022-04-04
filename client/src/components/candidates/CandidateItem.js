import React from "react";

const CandidateItem = ({ candidate, setSelectedCandidate }) => {
  return (
    <div
      onClick={() => setSelectedCandidate(candidate)}
      className="item candidate-item ui segment"
    >
      <img
        className="ui image circular tiny left"
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        alt="avatar"
      />
      <div className="middle aligned content">
        <div className="ui header small">{candidate.name}</div>
      </div>
    </div>
  );
};

export default CandidateItem;
