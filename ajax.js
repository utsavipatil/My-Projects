console.log('Ajax');

const fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('fetchBtn Clicked!!!');

    //Instatiate an xhr object
    const xhr = new XMLHttpRequest;

    //Open an object
    // //GET Request (we are getting data)
    // xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1' , true);

    //Post Request (we are sending data)
    xhr.open('POST' , '	https://dummy.restapiexample.com/api/v1/create' , true);
    xhr.getResponseHeader('Content-type' , 'application/json');

    //What to do on Progress (optional)
    xhr.onprogress = () => {
        console.log('on progress');
    };

    //What to do When response is ready
    xhr.onload = function() {
        if (this.status == 200){
            console.log(this.responseText);
        }else{
            console.log('error');
        }
    };

    params = `{"name":"testdf","salary":"123","age":"23"}`;
    //Send request
    xhr.send(params);
};

const popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('popBtn Clicked!!!');

    //Instatiate an xhr object
    const xhr = new XMLHttpRequest;

    //Open an object
    //GET Request (we are getting data)
    xhr.open('GET' , 'https://dummy.restapiexample.com/api/v1/employees' , true);

    //What to do When response is ready
    xhr.onload = function() {
        if (this.status === 200){
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            str = "";
            for (key in obj.data){
                str += `<li>${obj.data[key].employee_name} </li>`;
            }
            list.innerHTML = str;
            console.log(obj);
        }else{
            console.log('Some error occur');
        }
    };

    //Send request
    xhr.send();

    console.log('We are done featching employees!!!');
};