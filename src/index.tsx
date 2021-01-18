import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import HeaderCom from "./components/headerCom";
import FileInputModal from "./components/fileInputModal";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <HeaderCom />
    <FileInputModal />
  </React.StrictMode>,
  document.getElementById("root")
);
