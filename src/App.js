import * as React from "react";
import { Reset } from "styled-reset";
import GlobalStyles from "./GlobalStyles"

import Header from './components/Header'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
