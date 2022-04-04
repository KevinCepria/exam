import React from "react";

const Menu = () => {
  return (
    <div className="ui inverted small menu">
      <div className="ui container">
        <a href="/" className="item ui header medium">Home</a>
        <div className="right menu">
          <div className="item">
            <div className="ui primary inverted button">Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
