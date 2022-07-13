showNotes(); //User can see saved notes when Reload

//If User Adds a note, store it into Local Storage
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click' , () => {

    let addTitle = document.getElementById('addTitle');
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes); //Convert into Object
    }

    let myObj = {
        title: addTitle.value,
        text: addText.value
      }
    notesObj.push(myObj);

    localStorage.setItem('notes' , JSON.stringify(notesObj)); //Store into String format
    addText.value = "";
    addTitle.value = "";
    // console.log(notesObj);

    showNotes();
});

// Function to show elements from Local Storage
function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes); //Convert into Object
    }

    //Add Card When note created
    let html = "";
    notesObj.forEach((element , index) => {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });

    //Default message
    let notesElem = document.getElementById('notes');

    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }else{
        notesElem.innerHTML = `<em>Nothing to show! Use "Add a Note" section above to add Notes. </em>`;
    }  
}

//Function to Delete node
function deleteNote(index){
    // console.log('I am deleting Note', Number(index) + 1 );
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index , 1); 
    localStorage.setItem('notes' , JSON.stringify(notesObj)); //Store into String format
    showNotes();
}

let searchText = document.getElementById('searchText');

searchText.addEventListener('input' , () => {
    // console.log('Search Input event fired!!!', searchText.value);
    let noteCards = document.getElementsByClassName('noteCard');
    
    Array.from(noteCards).forEach(element => {
        let cardHead = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let cardText = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardText);

        let inputValue = searchText.value.toLowerCase(); //Case InSensitive

        if(cardText.includes(inputValue) || cardHead.includes(inputValue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    });
});

/*
Furhter Features
1. Add Title
2. Mark a note as Important
3. Separate by User
4. Sync & host to web Server 
*/