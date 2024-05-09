import React, { useState } from 'react';
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnUnderline } from 'react-simple-wysiwyg';
// import 'react-simple-wysiwyg/dist/index.css';

export const TextEditor = ({ onChange, value, name }) => {
    function handleChange(content) {
        onChange(content, name);
    }

    return (
        <EditorProvider>
            <Editor value={value} onChange={handleChange}>
                <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    {/* Add more custom buttons here */}
                </Toolbar>
            </Editor>
        </EditorProvider>
    );
};

export default TextEditor;
