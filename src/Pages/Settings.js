import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/1" element={<h2>dkfnvskjdfosn</h2>} />
        <Route path="/2" element={<h2>dkvskjdfosn</h2>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Settings;
