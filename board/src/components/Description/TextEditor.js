import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "./TextEditor.css"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className="editor-container">
        <div className="editor-wrapper">
          <div className="editor-border">
            <Editor
              editorState={editorState}
              toolbarClassName="black-toolbar"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
        </div>
        <div className="button-container">
          <button className="save-button" onClick={this.handleSave}>
            Save
          </button>
          <button className="cancel-button" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
