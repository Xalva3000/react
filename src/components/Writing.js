import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";


class Writing extends React.Component {
    writing = this.props.writing
    render() {
      return (
        <div className="writing">
          <IoCloseCircleSharp className="delete-icon"/>
          <IoHammerSharp className="edit-icon"/>
            <h3>Title: {this.writing.title}</h3>
            <p>Brief description: {this.writing.briefDescription}</p>
            <p>Paragraphs: {this.writing.paragraphs}</p>
        </div>
      );
    }
  };

  export default Writing;