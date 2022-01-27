import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";

export default function Routess() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/notes-react" element={<Login />} />
        <Route path="/notes-react/login" element={<Login />} />
        <Route path="/notes-react/sign-up" element={<SignUp />} />
        <Route path="/notes-react/home" element={<Home />} />
        <Route path="/notes-react/new-note" element={<NewNote />} />
      </Routes>
    </HashRouter>
  );
}
