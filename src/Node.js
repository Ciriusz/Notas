import React from 'react';

const Node = ({ note }) => {
  return (
    <div className={`note ${note.important ? 'important' : ''}`}>
      {note.title && <h3>{note.title}</h3>}
      <p>{note.description}</p>
    </div>
  );
};

export default Node;
