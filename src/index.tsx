import React from "react";
import ReactDOM from "react-dom";

import HeaderX from "./components/header";
import FooterX from "./components/footer";
import FileInputModal from "./components/fileInputModal";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <HeaderX />
    <FileInputModal />
    <FooterX />
  </React.StrictMode>,
  document.getElementById("root")
);
