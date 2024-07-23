import React from 'react';
import Note from './Node';

const NoteBoard = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
};

export default NoteBoard;
