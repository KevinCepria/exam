import React from "react";
import { AppProvider } from "../context/AppContext";
import CandidateList from "./candidates/CandidateList";
import VideoList from "./videos/VideoList";
import Menu from "./Menu";
import Board from "./Board";
import "./App.scss";

const App = () => {
  return (
    <AppProvider>
      <Menu />
      <div className="ui container" style={{ marginTop: "50px" }}>
        <div className="ui grid">
          <div className="ui row">
            <div className="five wide column">
              <Board />
              <CandidateList />
            </div>
            <div className="eleven wide column">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
