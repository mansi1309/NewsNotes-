// app.js
import { showNotes, addNote, deleteNote, searchNotes } from './NotesFun.js';

console.log("Welcome to notes app. This is app.js");
showNotes();

document.getElementById("addBtn").addEventListener("click", addNote);
document.getElementById('searchTxt').addEventListener("input", searchNotes);


// Attach deleteNote to the window object to make sure it's accessible
window.deleteNote = deleteNote;