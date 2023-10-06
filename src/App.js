import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditRow from "./EditRow";
import DragDrop from "./DragDrop";
import Menu from "./Menu";

export default function App() {
  return (
    <BrowserRouter basename={"/TTK/"}>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/editrow" element={<EditRow />} />
        <Route path="/dragdrop" element={<DragDrop />} />
      </Routes>
    </BrowserRouter>
  );
}
