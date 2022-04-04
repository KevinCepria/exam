import React, { useEffect, useState, useContext } from "react";
import json from "../../api/json";
import CandidateItem from "./CandidateItem";
import AppContext from "../../context/AppContext";

const CandidateList = () => {
  const [ candidates, setCandidates ] = useState([]);
  const { setSelectedCandidate } = useContext(AppContext)

  useEffect(() => {
    json.get("/candidates").then((res) => setCandidates(res.data));
  }, []);

  const renderList = () =>
    candidates.map((candidate) => (
      <CandidateItem
        setSelectedCandidate={setSelectedCandidate}
        key={candidate.id}
        candidate={candidate}
      />
    ));

  return <div className="ui segments items">{renderList()}</div>;
};

export default CandidateList;
