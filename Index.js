const cardList = document.querySelector('.cardList');

buildBoard();

let interval = setInterval(function () {
    addCard(cardList.children.length + 1)
}, 2000);
let points = document.getElementById('score');
let amount = 0;
let clickAmount = 1;
cardList.addEventListener('click', function(e) {
    console.log(e.target);
    amount += clickAmount;
    points.innerHTML = 'Points:' + amount;

    if (e.target.matches('.cardList')) {
        return
    }
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    if (e.target.classList.contains('inactive')) {
        amount++;
        points.innerHTML = 'Points:' + amount;
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length <1){
        clearInterval(interval);

    }
});


function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('Start!')
    }
}




