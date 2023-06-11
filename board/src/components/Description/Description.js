import React, { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { RiRadioFill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './Description.module.css';
import TextEditor from './TextEditor';

export function Description() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isDescriptionEditMode, setIsDescriptionEditMode] = useState(false);
  const [isActivityEditMode, setIsActivityEditMode] = useState(false);

  const handleSaveDescription = (e) => {
    e.preventDefault();
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    console.log(htmlContent);
    setEditorState(EditorState.createEmpty());
  };

  const handleSaveActivity = (e) => {
    e.preventDefault();
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    console.log(htmlContent);
    setEditorState(EditorState.createEmpty());
  };

  const handleChange = (state) => {
    setEditorState(state);
  };

  const handleEditDescription = () => {
    setIsDescriptionEditMode(true);
  };

  const handleEditActivity = () => {
    setIsActivityEditMode(true);
  };

  const handleCancelDescription = () => {
    setIsDescriptionEditMode(false);
  };

  const handleCancelActivity = () => {
    setIsActivityEditMode(false);
    setEditorState(EditorState.createEmpty()); // Clear the editor content when canceling
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

        {isDescriptionEditMode ? (
          <TextEditor onSave={handleSaveDescription} editorState={editorState} onChange={handleChange} />
        ) : (
          <div>
            <p>Text content goes here...</p>
            <button className={styles.edit_btn} onClick={handleEditDescription}>
              Edit
            </button>
          </div>
        )}

        <div className={styles.text_btn}>
          {isDescriptionEditMode ? (
            <>
              <button className={styles.save_btn} onClick={handleSaveDescription} type="button">
                Save
              </button>
              <button className={styles.cancel_btn} onClick={handleCancelDescription}>
                Cancel
              </button>
            </>
          ) : null}
        </div>
      </div>

      <div className={styles.Activity}>
        <h3>
          <AiOutlineAlignLeft />
          Activity
        </h3>
        {isActivityEditMode ? (
          <TextEditor onSave={handleSaveActivity} editorState={editorState} onChange={handleChange} />
        ) : (
          <div>
            <div style={{ fontSize: '1.5rem' }}>
              <HiUser /> <textarea className={styles.text_area_user} onClick={handleEditActivity} placeholder="Write a comment" />
            </div>
          </div>
        )}
        <div className={styles.text_user_btn}>
          {isActivityEditMode ? (
            <>
              <button className={styles.save_btn_second} onClick={handleSaveActivity}>
                Save
              </button>
              <button className={styles.Watch_btn}>Watch</button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
