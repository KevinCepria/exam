import React, { useState } from "react";

const Context = React.createContext({
  selectedCandidate: {},
  setSelectedCandidate: () => {},
}); /* <==== default value */

const AppProvider = ({ children }) => {
  const [selectedCandidate, setSelectedCandidate] = useState({ applicationId: null});


  return (
    <Context.Provider
      value={{
        selectedCandidate,
        setSelectedCandidate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
export { AppProvider };
