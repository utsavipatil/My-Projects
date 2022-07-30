// console.log('Form validation');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false, validEmail = false , validPhone = false;
$('#failure').hide();
$('#success').hide();

//Validate Name , Email , Phone
userName.addEventListener('blur', () =>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; // start & end with maximum 10 length (2,10] allowed of numbers/alphabtes
    let str = userName.value;

    if(regex.test(str)){
        validUser = true;
        userName.classList.remove('is-invalid');
    }else{
        validUser = false;
        userName.classList.add('is-invalid');
    }
});

email.addEventListener('blur', () =>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; // + = 1/more ,  .gov.in will also match
    let str = email.value;

    if(regex.test(str)){
        validEmail = true;
        email.classList.remove('is-invalid');
    }else{
        validEmail = false;
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur', () =>{
    let regex = /^[0-9]{10}$/; //Only 10 digit number
    let str = phone.value;

    if(regex.test(str)){
        validPhone = true;
        phone.classList.remove('is-invalid');
    }else{
        validPhone = false;
        phone.classList.add('is-invalid');
    }
});

//Submit Button
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validEmail && validPhone && validUser){
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide(); //JQuery
        $('#success').show();
    }else{
        console.log('One of phone/user/email is not valid hence not submitting form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
    }
    
});