import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import Routess from "./routes";

import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <Routess />
    </HashRouter>
  );
}
