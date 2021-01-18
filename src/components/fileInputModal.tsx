import React from "react";
import "../styles/fileModal.css";

class FileInputModal extends React.Component {
  fileInput: any;
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      fileAccepted: true,
    };
  }
  handleSubmit(event: any) {
    event.preventDefault();
    var x = new FileReader();
    let z = (x.onload = () => {
      alert(this.fileInput.current.files[0].name);
      //@ts-ignore
      let y = JSON.parse(x.result?.toString().toString());
      alert(y.kind);
    });
    x.readAsText(this.fileInput.current.files[0]);
  }
  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input type="file" ref={this.fileInput} accept=".json,.txt"></input>
          <input type="submit" />
        </form>
        <h2>PAGE UNDER CONSTRUCTION</h2>
      </main>
    );
  }
}

export default FileInputModal;
//add a way to upload the json file via URL.
//So, you can use the query string to directly into the saved posts.
