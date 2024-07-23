import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return; // Validar para que no esté vacía

    const newNote = { title, description, important };
    addNote(newNote);
    
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="important"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="important">Importante</label>
      </div>
      <button type="submit" className="btn btn-primary">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
