import React from "react";
import "../styles/fileModal.css";

class FileInputModal extends React.Component {
  render() {
    return (
      <main>
        <input type="file" id="file-selector" accept=".json"></input>
        <h2>PAGE UNDER CONSTRUCTION</h2>
      </main>
    );
  }
}

export default FileInputModal;
//add a way to upload the json file via URL.
//So, you can use the query string to directly into the saved posts.
