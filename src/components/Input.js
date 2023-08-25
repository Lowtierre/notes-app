import React, { useState } from "react";
import { generateIndex } from "../utilities";

export default function Input({ addNote }) {

    const [text, setText] = useState('');

    const handleText = (e) => {
        setText(e.target.value);
        console.log(text)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            idx: generateIndex(),
            text: text
        }
        if (note.text !== '') {
            addNote(note);
        }
        setText('')
    }

    return (
        <form className="noteForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your note here..." value={text} onChange={handleText} />
            <input type="submit" value="Add note" />
        </form>
    );
}