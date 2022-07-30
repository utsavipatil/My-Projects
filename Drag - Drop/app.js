// console.log('Drag & Drop');
const imgBox = document.querySelector('.imgBox');
const whiteBoxs = document.querySelectorAll('.whiteBox');

//Event Listeners for Dragable img box
imgBox.addEventListener('dragstart' , (e) =>{
    console.log('Drag start');
    e.target.classList.add('hold');
    setTimeout(() => { //Run after all done
        e.target.classList.add('hide');    
    }, 0 );
});

imgBox.addEventListener('dragend' , (e) => {
    console.log('Drag end');
    //Because we already hide imgBox from start so when drag end we need to add imgBox else it won't add
    e.target.className = 'imgBox'; 
});

//White Box Event listeners
for(whiteBox of whiteBoxs){
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault(); //We can drop element 
        console.log('Drag over');

    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Drag enter');
        e.target.classList.add('dashed');
        
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Drag leave');
        e.target.classList.remove('dashed');
        
    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drag drop');
        e.target.append(imgBox); //Add imgBox div to target whiteBox
    });
}