console.log("javascript working");
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', (e) => {
    let text = document.getElementById('text');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(text.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    text.value = "";
    console.log(notesObj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += ` <div  id="card" class="noteCard">
        <div class="content">
        <h2>${index}</h2>
        <h3>Note${index+1}</h3>
        <p class="card-text">${element}</p>
        <div class="cbtn">
            <button id="${index}" onclick="deleteNote(this.id)" class="delbtn">Delete</button>
        </div>
    </div>
    </div>`
    })
    let el = document.getElementById('notes');
    if (notesObj.length != null) {
        el.innerHTML = html;
    } else {
        el.innerHTML = `nothing to show pls add a note`;
    }
}

function deleteNote(index) {
    console.log("deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
}



let search = document.getElementById('stxt');
search.addEventListener("input", function() {

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})