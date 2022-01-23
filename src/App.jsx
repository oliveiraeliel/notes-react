import React, { useEffect } from "react";
import Routess from "./routes";
import axios from "axios";

import "./App.css";

import { api } from "./Api";

export default function App() {
  useEffect(()=>{
    api.get("/note").then(res=>{
      console.log(res.data)
    })
  }, []);
  return <Routess />;
}
