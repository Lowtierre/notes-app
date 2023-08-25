import React from "react"

export default function Note({ note, removeNote }) {

    const handleRemoveNote = () => {
        removeNote(note.idx)
    }

    return (
        <div className="note">
            <h3>{note.text}</h3>
            <button onClick={handleRemoveNote}><i class="fa-solid fa-x"></i></button>
        </div>
    );
}