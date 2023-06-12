import React, { useState, useEffect } from 'react';
import { BsEye } from 'react-icons/bs';
import { RiRadioFill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './Description.module.css';

import TextEditor from './TextEditor';

export function Description() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [savedContent, setSavedContent] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('descriptionContent');
    if (savedContent) {
      const contentState = convertFromHTML(savedContent);
      const editorContent = ContentState.createFromBlockArray(contentState.contentBlocks);
      setEditorState(EditorState.createWithContent(editorContent));
      setSavedContent(savedContent);
    }
  }, []);
  
  const handleSaveDescription = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    setSavedContent(htmlContent);
    localStorage.setItem('descriptionContent', htmlContent);
    setShowEditor(false);
  };
  

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleEditDescription = () => {
    setShowEditor(true);
  };

  const handleCancelEdit = () => {
    setEditorState(EditorState.createEmpty());
    setShowEditor(false);
  };

  return (
    <div className={styles.Whole_Box}>
      <div className={styles.header_top}>
        <h3>
          <RiRadioFill />
          Title
        </h3>
        <p>in list Title_Name</p>
        <button>
          <RxCross2 />
        </button>
      </div>

      <div className={styles.second_top}>
        <p>Notification</p>
        <button className={styles.watch_btn}>
          <BsEye />
          Watch
        </button>
      </div>

      <div className={styles.Description_top}>
        <h3>
          <HiOutlineMenuAlt2 />
          Description
        </h3>

        {!showEditor ? (
          <div>
            <div className={styles.savedContent} dangerouslySetInnerHTML={{ __html: savedContent }} />
            <button className={styles.editButton} onClick={handleEditDescription}>
              Edit Description
            </button>
          </div>
        ) : (
          <div>
          <TextEditor
  onSave={handleSaveDescription}
  editorState={editorState}
  onChange={handleEditorChange}
  savedContent={savedContent}
/>

            <div className={styles.editorButtons}>
              <button className={styles.saveButton} onClick={handleSaveDescription}>
                Save
              </button>
              <button className={styles.cancelButton} onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.Activity}>
        <h3>
          <AiOutlineAlignLeft />
          Activity
        </h3>
        <div>
          <div style={{ fontSize: '1.5rem' }}>
            <HiUser /> <textarea className={styles.text_area_user} placeholder="Write a comment" />
          </div>
        </div>
        <div className={styles.text_user_btn}>
          <button className={styles.save_btn_second}>Save</button>
          <button className={styles.Watch_btn}>Watch</button>
        </div>
      </div>
    </div>
  );
}
