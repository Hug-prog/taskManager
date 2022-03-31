import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Todolist from "../pages/Todolist";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/todolist/:id">
        <Route index element={<Todolist />} />
      </Route>
    </Routes>
  );
}
