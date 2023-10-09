import React from "react";
import { BrowserRouter, Routes,Route  } from "react-router-dom";
import EditRow from "./EditRow";
import DragDrop from "./DragDrop";
import Menu from "./Menu";
import Print from "./Print";

export default function App() {
  return (
    <BrowserRouter basename={"/table-tennis-king/"}>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/editrow" element={<EditRow />} />
        <Route path="/dragdrop" element={<DragDrop />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
}
