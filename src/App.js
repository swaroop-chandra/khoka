import logo from "./logo.svg";
import React from "react";
import { useEffect, createContext, useState } from "react";

import "./App.css";
import Page1 from "./component/Page1/Page1";
import Nav from "./component/Nav/Nav";
import Page2 from "./component/Page2/Page2";
import Page3 from "./component/Page3/Page3";
import Page4 from "./component/Page4/Page4";
import Page5 from "./component/Page5/Page5";
import Page6 from "./component/Page6/Page6";
import { statesInitializer } from "./statesInitializer";
import { Routes, Route } from "react-router";

export const KhokaContext = createContext();

function App() {
  const [context, setContext] = useState({ ...statesInitializer });

  return (
    <KhokaContext.Provider value={[context, setContext]}>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/home" element={<Page1 />} />
          <Route path="/register" element={<Page2 />} />
          <Route path="/process" element={<Page3 />} />
          <Route path="/terms_condition" element={<Page4 />} />
          <Route path="/loading" element={<Page5 />} />
          <Route path="/profile" element={<Page6 />} />
        </Routes>
      </div>
    </KhokaContext.Provider>
  );
}

export default App;
