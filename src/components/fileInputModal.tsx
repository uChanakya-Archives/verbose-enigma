import React from "react";
import RenderCards from "./cards";

import "../styles/fileModal.css";
import { RedditSavedPostsJson } from "../app/interfaces";

let JSONfile: object;

class FileInputModal extends React.Component<{}, { fileAccepted: boolean }> {
  fileInput: any;
  constructor(props: any) {
    super(props);
    this.state = {
      fileAccepted: false,
    };
    this.fileInput = React.createRef();
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    var fileAPI = new FileReader();
    fileAPI.readAsText(this.fileInput.current.files[0]);
    fileAPI.onload = () => {
      let JSONfileText = fileAPI.result as string;
      JSONfile = JSON.parse(JSONfileText);
      this.setState({ fileAccepted: true });
    };
  };

  render() {
    const { handleSubmit, fileInput } = this;
    const { fileAccepted } = this.state;

    if (!fileAccepted) {
      return (
        <main>
          <form onSubmit={handleSubmit}>
            <input type="file" ref={fileInput} accept=".json,.txt"></input>
            <input type="submit" />
          </form>
          <h2>PAGE UNDER CONSTRUCTION</h2>
        </main>
      );
    } else {
      return (
        <main>
          <RenderCards jsonFile={JSONfile as RedditSavedPostsJson} />
        </main>
      );
    }
  }
}

export default FileInputModal;
//add a way to upload the json file via URL.
//So, you can use the query string to directly into the saved posts.
