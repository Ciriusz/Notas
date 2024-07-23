import React, { useState, useEffect } from 'react';
import NoteForm from './noteForm';
import NoteBoard from './NoteBoard';
import './App.css'; 

const App = () => {
  const [notes, setNotes] = useState([]);

  // recupera del local storage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // guarda en local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="app">
      <h1>Notas Adhesivas</h1>
      <div className="note-board">
        <NoteForm addNote={addNote} />
        <NoteBoard notes={notes} />
      </div>
    </div>
  );
};

export default App;
