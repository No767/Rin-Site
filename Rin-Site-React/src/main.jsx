import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Commands from "./routes/commands";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="commands" element={<Commands />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
