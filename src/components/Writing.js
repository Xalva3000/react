import React from "react";

class Writing extends React.Component {
    writing = this.props.writing
    render() {
      return (
        <div className="writing">
            <h3>Title: {this.writing.title}</h3>
            <p>Brief description: {this.writing.briefDescription}</p>
            <p>Paragraphs: {this.writing.paragraphs.length}</p>
        </div>
      );
    }
  };

  export default Writing;