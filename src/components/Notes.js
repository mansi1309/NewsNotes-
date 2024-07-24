// src/Notes.js
import React, { useEffect } from 'react';
import { showNotes, addNote, searchNotes } from './NotesFun';

const Notes = () => {
  useEffect(() => {
    showNotes();
    searchNotes();
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "60px 0px 0px" }}>Welcome To Magic Notes</h1>
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <h5 className="card-title">Add title</h5>
            <input type="text" className="form-control" id="addTitle" aria-describedby="title" placeholder="Enter title" />
          </div>
          <h5 className="card-title">Add a note</h5>
          <div className="form-group">
            <textarea className="form-control" id="addTxt" rows="3"></textarea>
          </div>
          <button className="btn btn-primary" id="addBtn" onClick={addNote}>Add Note</button>
        </div>
      </div>
      <hr />
      <h3>Your Notes</h3>
      <hr />
      <div id="notes" className="row container-fluid">Nothing to show! Use "Add a Note" section above to add notes.</div>
    </div>
  );
}

export default Notes;
