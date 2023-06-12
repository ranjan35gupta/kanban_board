import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import './TextEditor.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export default class TextEditor extends Component {
  onEditorStateChange = (editorState) => {
    const { onChange } = this.props;
    onChange(editorState);
  };

  render() {
    const { editorState, onSave, savedContent } = this.props;
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
      </div>
    );
  }
}
