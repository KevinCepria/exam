import React, { useEffect, useState } from "react";
import json from "../../api/json";
import CandidateItem from "./CandidateItem";

const CandidateList = () => {
  const [ candidates, setCandidates ] = useState([]);

  useEffect(() => {
    json.get("/candidates").then((res) => setCandidates(res.data));
  }, []);

  const renderList = () =>
    candidates.map((candidate) => (
      <CandidateItem
        key={candidate.id}
        candidate={candidate}
      />
    ));

  return <div className="ui segments items">{renderList()}</div>;
};

export default CandidateList;
