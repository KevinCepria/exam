import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Board = () => {
  const { selectedCandidate } = useContext(AppContext)
  return (
    <div className="ui message">
      <div className="header ui large" style={{marginBottom: '15px'}}>Candidate: </div>
      <div className="header ui medium">{selectedCandidate.name}</div>
    </div>
  );
};

export default Board;
