

// export function showNotes() {
//     let notes = localStorage.getItem("notes");
//     let notesObj;
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     let html = "";
//     notesObj.forEach(function (element, index) {
//         html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">${element.title}</h5>
//                     <p class="card-text"> ${element.text}</p>
//                     <button id="${index}" onclick="window.deleteNote(${index})" class="btn btn-primary">Delete Note</button>
//                 </div>
//             </div>`;
//     });
//     let notesElm = document.getElementById("notes");
//     if (notesObj.length !== 0) {
//         notesElm.innerHTML = html;
//     } else {
//         notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
// }

// export function addNote() {
//     let addTxt = document.getElementById("addTxt");
//     let addTitle = document.getElementById("addTitle");
//     let notes = localStorage.getItem("notes");
//     let notesObj;
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     let myObj = {
//         title: addTitle.value,
//         text: addTxt.value
//     }
//     notesObj.push(myObj);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTxt.value = "";
//     addTitle.value = "";
//     showNotes();
// }

// export function deleteNote(index) {
//     let notes = localStorage.getItem("notes");
//     let notesObj;
//     if (notes == null) {
//         notesObj = [];
//     } else {
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.splice(index, 1);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     showNotes();
// }

// export function searchNotes() {
//     let search = document.getElementById('searchTxt');
//     if (search) {
//         search.addEventListener("input", function () {
//             let inputVal = search.value.toLowerCase();
//             let noteCards = document.getElementsByClassName('noteCard');
//             Array.from(noteCards).forEach(function (element) {
//                 let cardTxt = element.getElementsByTagName("p")[0].innerText;
//                 if (cardTxt.includes(inputVal)) {
//                     element.style.display = "block";
//                 } else {
//                     element.style.display = "none";
//                 }
//             });
//         });
//     }
// }

// // Attach deleteNote to the window object so it's globally accessible
// window.deleteNote = deleteNote;


export function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <p class="card-text"><small class="text-muted">Created on: ${element.datetime}</small></p>
                    <button id="${index}" onclick="window.deleteNote(${index})" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    notesElm.innerHTML = notesObj.length ? html : `Nothing to show! Use "Add a Note" section above to add notes.`;
}

export function addNote() {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];
    
    let now = new Date();
    let datetime = now.toLocaleString();

    let myObj = {
        title: addTitle.value,
        text: addTxt.value,
        datetime: datetime
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
}

export function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

export function searchNotes() {
    let search = document.getElementById('searchTxt');
    if (search) {
        search.addEventListener("input", function () {
            let inputVal = search.value.toLowerCase();
            let noteCards = document.getElementsByClassName('noteCard');
            Array.from(noteCards).forEach(function (element) {
                let cardTxt = element.getElementsByTagName("p")[0].innerText;
                if (cardTxt.includes(inputVal)) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
        });
    }
}

// Attach deleteNote to the window object so it's globally accessible
window.deleteNote = deleteNote;
