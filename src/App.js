import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([]);
  
  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  }
  
  const removeNote = (index) => {
    setNotes(notes => notes.filter(note => note.idx !== index));
  }

  return (
    <div className="App">
      <Header />
      <Input addNote={addNote} />
      <div className='notes'>
        {(notes.length !== 0) ? notes.map(note => <Note key={note.idx} note={note} removeNote={removeNote} />) : ''}
      </div>
    </div>
  );
}

export default App;
