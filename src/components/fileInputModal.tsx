import React from "react";
import "../styles/fileModal.css";

class FileInputModal extends React.Component {
  fileInput: any;
  fAcc: boolean;
  JSONfile: object;
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fAcc = false;
    this.JSONfile = {};
    this.fileInput = React.createRef();
    this.state = {
      fileAccepted: false,
    };
  }
  handleSubmit(e: any) {
    e.preventDefault();
    var x = new FileReader();
    x.readAsText(this.fileInput.current.files[0]);
    x.onload = () => {
      alert(this.fileInput.current.files[0].name); //@ts-ignore
      let JSONfileText = x.result?.toString(); //@ts-ignore
      this.JSONfile = JSON.parse(JSONfileText);
      this.fAcc = true;
      this.setState({ fileAccepted: true });
    };
  }
  render() {
    if (!this.fAcc) {
      return (
        <main>
          <form onSubmit={this.handleSubmit}>
            <input type="file" ref={this.fileInput} accept=".json,.txt"></input>
            <input type="submit" />
          </form>
          <h2>PAGE UNDER CONSTRUCTION</h2>
        </main>
      );
    } else {
      //@ts-ignore
      let meow = this.JSONfile.data.children.length;
      return (
        <main>
          <p>{meow}</p>
        </main>
      );
    }
  }
}

export default FileInputModal;
//add a way to upload the json file via URL.
//So, you can use the query string to directly into the saved posts.
