// console.log('Postman Clone');

//Utility Function
//1. Function to get DOM element from string
function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//Parameter count
let addParamscount = 2;

//Initially hide parameters box
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = "none";

//If user clicks on JSON box , hide params box
let params = document.getElementById('params');
params.addEventListener('click', () => {
    document.getElementById('requestJSONBox').style.display = "none";
    document.getElementById('parameterBox').style.display = "block";
});

//If user clicks on params box , hide JSON box
let json = document.getElementById('json');
json.addEventListener('click', () => {
    document.getElementById('parameterBox').style.display = "none";
    document.getElementById('requestJSONBox').style.display = "block";
});

//If user clicks on "+" button , add more parameters
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let newParams = document.getElementById('newParams');
    let str = `<div class="form-row my-2">
                <label for="inputEmail4" class="col-form-label col-sm-2 pt-0">Parameter ${addParamscount}</label>
                <div class="col-md-4">
                <input type="text" class="form-control" id="parameterKey${addParamscount}" placeholder="Enter Parameter ${addParamscount} Key">
                </div>
                <div class="col-md-4">
                <input type="text" class="form-control" id="parameterValue${addParamscount}" placeholder="Enter Parameter ${addParamscount} Value">
                </div>
                <button id="addBtn" class="btn btn-primary deleteParam">-</button>
                </div>`;

    //Convert the element string to DOM nodeS
    let paramsElement = getElementFromString(str); 
    newParams.appendChild(paramsElement);

    //Remove Parameter by "-" button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam){
        item.addEventListener('click' , (e) => {
            //ALERT: Add Confimation BOX
            e.target.parentElement.remove(); //Parent of target is "str"
        });
    }

    addParamscount++;

});

//If User clicks on "Submit" button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //Show please wait in the respomse box to request patience from the user
    // document.getElementById('responseJSONText').value = "Please wait....  Fetching response....";
    document.getElementById('responsePrism').innerHTML = "Please wait....  Fetching response....";


    //Fetch all data entered bu user
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value; //no space
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    
    //If user has choose params option instead of json , collect all the parameters in an object
    if(contentType == 'params'){
        data = {};
        for(let i=1; i<addParamscount; i++){

            if(document.getElementById('parameterKey' + i) != undefined){
                let key = document.getElementById('parameterKey' + i).value;
                let value = document.getElementById('parameterValue' + i).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }else{
        // data = document.getElementById('requestJSONText').value;
        data = document.getElementById('responsePrism').innerHTML;
            
    }

    // console.log(url , requestType , contentType , data); //Log all values for debug

    //If request type is GET , invoke fetch API to create a post request
    if(requestType == 'GET'){

        fetch(url , {

            method : 'GET'

        }).then(response => response.text()).then((text) => {

            // document.getElementById('responseJSONText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    
    }else{

        fetch(url , {

            method : 'POST',
            body : data,
            headers : {
                'Content-type' : "application/json; charset=UTF-8"
            }

        }).then(response => response.text()).then((text) => {

            // document.getElementById('responseJSONText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });


    }

});