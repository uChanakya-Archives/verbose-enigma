import React from "react";
import "../styles/headerCom.css";

class FileInputModal extends React.Component {
  render() {
    return (
      <div>
        <input type="file" id="file-selector" accept=".json"></input>
      </div>
    );
  }
}

export default FileInputModal;
