const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
];

let resultDisplay = document.getElementById('result')
let grid = document.querySelector('.grid');
let cardChosen = [];
let cardChosenID = [];
let cardWons = [];
//Sort element of an array in random order
for (let i = cardArray.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * i);
    let temp = cardArray[k];
    cardArray[k] = cardArray[i];
    cardArray[i] = temp;
}

//Create board
for (let i = 0; i < cardArray.length; i++) {
    //Create Element
    let card = document.createElement('img');
    card.setAttribute('src', './images/blank.png');
    card.setAttribute('data-id', i);
    grid.appendChild(card);

    //Flip card
    card.addEventListener('click', flipCard);

};

function flipCard() {
    let cardID = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardID].name)
    cardChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img)
    if (cardChosen.length === 2) {
        //Check match
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch () {
    let allImage = document.querySelectorAll('img');
    if (cardChosenID[0] == cardChosenID[1]) {
        allImage[cardChosenID[0]].setAttribute('src', './images/blank.png');
        allImage[cardChosenID[1]].setAttribute('src', './images/blank.png');
        alert('Bro, you have clicked the same image');
    } else if (cardChosen[0] === cardChosen[1]) {
        allImage[cardChosenID[0]].setAttribute('src', './images/white.png');
        allImage[cardChosenID[1]].setAttribute('src', './images/white.png');
        allImage[cardChosenID[0]].removeEventListener('click', flipCard);
        allImage[cardChosenID[1]].removeEventListener('click', flipCard);
        cardWons.push(cardChosen);
    } else {
        allImage[cardChosenID[0]].setAttribute('src', './images/blank.png');
        allImage[cardChosenID[1]].setAttribute('src', './images/blank.png');
    }
    cardChosen = [];
    cardChosenID = [];
    resultDisplay.innerHTML = cardWons.length;
    if(cardWons.length === cardArray.length / 2) {
        alert('You won')
    }
}