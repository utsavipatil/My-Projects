console.log('library task');

class Library{
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        return this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName , user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }else{
            console.log('This Book already Isssued!!!');
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}