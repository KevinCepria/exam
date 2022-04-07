import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const CandidateItem = ({ candidate }) => {
  const { setSelectedCandidate } = useContext(AppContext)
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
