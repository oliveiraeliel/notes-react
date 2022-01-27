import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notes-react" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-note" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
  );
}
