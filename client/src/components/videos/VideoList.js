import React, { useState, useEffect, useContext } from "react";
import VideoItem from "./VideoItem";
import Spinner from "../Spinner";
import json from "../../api/json";
import AppContext from "../../context/AppContext";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { selectedCandidate } = useContext(AppContext);

  useEffect(() => {
    setIsFetching(true);
    json
      .get("/applications", {
        params: {
          id: selectedCandidate.applicationId || 0,
        },
      })
      .then((res) => {
        const list = res.data.length ? res.data[0].videos : [];
        setVideos(list);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [selectedCandidate]);


  const renderContet = () => {
    if (isFetching) {
      return <Spinner />;
    }
    if (selectedCandidate.applicationId === null) {
      return (
        <div className="ui header segment huge initial-msg">
          Select a candidate
        </div>
      );
    }

    if (selectedCandidate.applicationId === undefined && !videos.length) {
      return (
        <div className="ui header huge segment initial-msg">
          Candidate has no application
        </div>
      );
    }

    const renderList = () =>
      videos.map((video) => <VideoItem key={video.src} video={video} />);

    return <div>{renderList()}</div>;
  };

  
  return <>{renderContet()}</>;
};

export default VideoList;
