// console.log(`Utsavi#""`);
// var name = `Utsavi"`, bus = `nottaken`;
// console.log(name , bus);
// let i = 8;
// console.log(i);

// let myname = `Utsavi Rajendrakumar Patil`;
// let myhtml = ` <h1> Hy ${myname} </h1> here `;

// document.body.innerHTML = myhtml
// let myobj ={
//     name : `Utsavi Patil`,
//     company : `Thoghtworks`,
//     ctc : `12LPA`
// };

// for(let key in myobj){
//     console.log(`${key} = ${myobj[key]}`);
// }
// alert(`Hy`);
// a = prompt(`Are You Crazy?`);
// console.log(a);
// a = confirm(`Are you sure You can do this???`);
// a = innerHeight;
// a = innerWidth;
// a = location.toString();
// a = history;
// a = document.images;
// b = document.scripts;
// let a = document.links;
// Array.from(a).forEach(function(element){
//     str = element.href;
//     if(str.includes("facebook")){
//         console.log(element);
//     }
// })

// let ele = document.getElementsByClassName;
// console.log(a, b);
// let cont = document.querySelector('.container');
// c = cont.childNodes;
// c = cont.children;
// console.log(c);

// var  x, y, z= [1,2,3];
// console.log(x , y ,z);

// const a = 5;
// console.log(a);
// let hele = document.createElement('a');
// let text = document.createTextNode("Go to Google");
// hele.appendChild(text);
// console.log(hele);
// hele.setAttribute('href' , 'https://www.google.co.in/');

// let a = document.querySelector('.container');
// a.appendChild(hele);

// function Flour(type , time){
//     this.type = type;
//     this.time = time;
// }
// Flour.prototype.slogan = function(){
//     return `This flour : ${this.type}`;
// }
// function cake(type , time , name){
//     Flour.call(this , type , time);
//     this.name = name;
// }
// cake.prototype = Object.create(Flour.prototype);

class Library {
    constructor(bookList){
        this.bookList = bookList;
    }

    getBookList(bookList){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName , user){
        if(this.bookList.includes(bookName)){
            console.log(`This book is in library`);

            if(this.issuedBooks[bookName] == undefined){
                this.issuedBooks[bookName] = user;
                console.log(`This ${bookName} is issued to ${user}`);
            }else{
                console.log(`This book already issued`);
            }
        }else{
            console.log(`This book is not in Library!!!`);
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}