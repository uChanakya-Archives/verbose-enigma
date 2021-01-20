import React from "react";
import "../styles/fileModal.css";

let JSONfile: object;

class FileInputModal extends React.Component {
  fileInput: any;
  fAcc: boolean;
  constructor(props: any) {
    super(props);
    this.state = {
      fileAccepted: false,
    };
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fAcc = false;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    var x = new FileReader();
    x.readAsText(this.fileInput.current.files[0]);
    x.onload = () => {
      let JSONfileText = x.result as string;
      JSONfile = JSON.parse(JSONfileText);
      this.fAcc = true;
      this.setState({ fileAccepted: true });
    };
  }

  render() {
    const { fAcc, handleSubmit, fileInput } = this;

    if (!fAcc) {
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
      //@ts-ignore
      let meow = JSONfile.data.children.length;
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
