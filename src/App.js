import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing"

const App = () => {

  return (
    <Router>
      <div className="flex bg-red-100 min-h-screen">
        <Landing />
      </div>
    </Router>
  );
};

export default App;
