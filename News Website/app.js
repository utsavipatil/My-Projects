// console.log('Welcome to Utsavi News');

//Newa API Parameters
let apiKey = `13b77f3fc96d4ee49e8835686f893e76`;
let source = 'in';

//Grab news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET' , `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);
xhr.onload = function(){ //What to do when responce is ready
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = '';

        articles.forEach((element, index) => {

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link text-justify" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                <b>Breaking News ${index + 1}:- </b> ${element["title"]}
                                </button>
                            </h2>
                            </div>
                        
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body Text"> ${element["description"]}. <a href="${element['url']}" target ="_blank" ">Read more</a></div>
                            </div>
                        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;

    }else{
        console.log('Something went wrong!!!');
    }
};

xhr.send();

//Search News
let searchNews = document.getElementById('searchNews');

searchNews.addEventListener('input', () =>{
    let card = document.getElementsByClassName('card');

    Array.from(card).forEach(element=> {
        let cardHead = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
        let cardText = element.getElementsByClassName('Text')[0].innerText.toLowerCase();

        let inputValue = searchNews.value.toLowerCase(); //To make Case InSensitive

        if(cardHead.includes(inputValue) || cardText.includes(inputValue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    });
});

