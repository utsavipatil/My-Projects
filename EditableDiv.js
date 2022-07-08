//Create Element
let divEle = document.createElement('div'); 

//Add Text
let val = localStorage.getItem('text');
let text;
if(val == null){
   text = document.createTextNode('This is my element. click to edit'); 
}else{
    text = document.createTextNode(val);
}
divEle.appendChild(text);

//Set Attribute
divEle.setAttribute('id' , 'elem');
divEle.setAttribute('style', 'border: 2px solid black; margin : 30px; width : 200px; padding : 20px');
divEle.setAttribute('class' , 'elem');


//Insert Element before element with id myfirst
let container = document.querySelector('.container');
let myfirst = document.querySelector('.myfirst');
container.insertBefore(divEle , myfirst);

//Add Event Listner to the divEle
divEle.addEventListener('click', () => {
    let noOftextArea = document.getElementsByClassName('textArea').length;

    if(noOftextArea == 0){
        let html = elem.innerHTML;
        divEle.innerHTML = `<textarea class="form-control textArea" id="textArea" rows="3"> ${html} </textarea>`;
    }
    
    //Listen for the blur event on textArea
    let textArea = document.getElementsByClassName('textArea');
    textArea.addEventListener('blur' , () => {
        elem.innerHTML = textArea.value;
        localStorage.setItem('text' , elem.innerHTML);
    });
});
