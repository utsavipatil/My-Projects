// console.log('CV Screener');
//Data is an array of objects which contains information about the candidates
const data = [
    {
        name : 'Rohan Das',
        age : 18,
        city : 'Gandhinagar',
        language : 'Java',
        framework : 'SpringBoot',
        image : 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name : 'Utsavi Patil',
        age : 22,
        city : 'Ahemdabad',
        language : 'JavaScript',
        framework : 'React.js',
        image : 'https://randomuser.me/api/portraits/women/57.jpg'
    },
    {
        name : 'Oliver',
        age : 28,
        city : 'Sydney',
        language : 'Python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
        name : 'Love Babbar',
        age : 30,
        city : 'Kolkata',
        language : 'GO',
        framework : 'Angular.js',
        image : 'https://randomuser.me/api/portraits/men/12.jpg'
    },
];

//CV Iterator
function cvIterator(profiles){
    let nextIdx = 0;
    return{
        next : function(){
            return nextIdx < profiles.length ? {value : profiles[nextIdx++] , done : false} : {done : true}; 
        }
    }
}
const candidates = cvIterator(data);

nextCV(); //1st candidate will show

//Next button Listener
const next = document.getElementById('next');
next.addEventListener('click' , nextCV);

function nextCV(){

    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){
        image.innerHTML = `<img src = '${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item disabled" aria-disabled="true">Name : ${currentCandidate.name}</li>
        <li class="list-group-item disabled" aria-disabled="true">${currentCandidate.age} years old</li>
        <li class="list-group-item disabled" aria-disabled="true">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item disabled" aria-disabled="true">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item disabled" aria-disabled="true">Uses ${currentCandidate.framework} framework</li>
        </ul>`;
    }else{
        alert('End of candidate applications');
        window.location.reload(); //Reset Data
    }
}