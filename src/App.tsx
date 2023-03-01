import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"

import PageRouter from "./routes/index"

function App() {
  return (
    <Router>
      <PageRouter/>
    </Router>
  );
}

export default App;
