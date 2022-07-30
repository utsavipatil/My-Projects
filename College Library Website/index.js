// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

//Prototype Method
function Book(name , author , type){ //Constructor
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display(){ //Display Constructor

}

//Add Methods to display prototype
Display.prototype.add = (book) => {
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString; //Add new row 
};

//Implement Clear Function
Display.prototype.clear = () => {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

//Implement Validate Function
Display.prototype.validate = (book) => {
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    }else{
        return true;
    }
};

//Implement Show Function
Display.prototype.show = (type , displayMessage) => {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:-</strong> ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    // After 2000ms message will be null
    setTimeout(() => {
        message.innerHTML = ''
    }, 2000);
};

//Add Submit Event Listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit' , libraryFormSubmit);

function libraryFormSubmit(e){

    e.preventDefault(); //Prevent Default Behaviour

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value; 
    let type;
    
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let sports = document.getElementById('sports');

    if(fiction.checked){
        type = fiction.value;
    }else if(programming.checked){
        type = programming.value;
    }else if(sports.checked){
        type = sports.value;
    }

    let book = new Book(name , author , type);
    // console.log(book);

    let display = new Display();

    console.log(display.validate(book));

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success' , 'Your book has been successfully added :)');
    }else{
        //Show error to user
        display.show('danger' , 'Sorry you cannot add this book :(');
    }
    // console.log(`You have submitted libraryForm`);
}