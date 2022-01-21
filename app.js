
//photo credits Unsplash 
//used privatedaddy to resize images to 100*100
//bridge: Photo by <a href="https://unsplash.com/@timswaanphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Swaan</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//trees: Photo by <a href="https://unsplash.com/@szmigieldesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lukasz Szmigiel</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//waterfall: Photo by <a href="https://unsplash.com/@blakeverdoorn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Blake Verdoorn</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//fall leaves: Photo by <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Thomas</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//mountain: Photo by <a href="https://unsplash.com/@mvds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mads Schmidt Rasmussen</a> on <a href="https://unsplash.com/s/photos/mountain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//beach: Photo by <a href="https://unsplash.com/@oulashin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sean Oulashin</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//blank: Photo by <a href="https://unsplash.com/@beckerworks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Becker</a> on <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//white
//images all resized to 100 x 100px

document.addEventListener('DOMContentLoaded', () => {
    

const cardArray = [
    {
        name: 'bridge',
        img: 'images/memory_brige100.jpg'
    },
    {
        name: 'bridge',
        img: 'images/memory_brige100.jpg'
    },
    {
        name: 'trees',
        img: 'images/memory_trees100.jpg'
    },
    {
        name: 'trees',
        img: 'images/memory_trees100.jpg'
    },
    {
        name: 'waterfall',
        img: 'images/memory_waterfall100.jpg'
    },
    {
        name: 'waterfall',
        img: 'images/memory_waterfall100.jpg'
    },
    {
        name: 'mountain',
        img: 'images/memory_mountain100.jpg'
    },
    {
        name: 'mountain',
        img: 'images/memory_mountain100.jpg'
    },
    {
        name: 'beach',
        img: 'images/memory_beach100.jpg'
    },
    {
        name: 'beach',
        img: 'images/memory_beach100.jpg'
    },
    {
        name: 'leaves',
        img: 'images/memory_leaves100.jpg'
    },
    {
        name: 'leaves',
        img: 'images/memory_leaves100.jpg'
    }
    
]
//randomize cards - using sort and math random
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []



function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        //loop through cards and create an image for each card
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg') //link to image file
        card.setAttribute('data-id', i) //id will go from 0 to 11 since have 12 careds
        card.addEventListener('click', flipCard) //when card is clicked, call function flipcard
        grid.appendChild(card) //add each card image to the grid
    }   
}


function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) { //only allowed to flip 2 cards
        setTimeout(checkForMatch, 500)//when 2 flipped, call function checkForMatch after 500 millisec
    }


function checkForMatch() {
    var cards = document.querySelectorAll('img')//get all images
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {//names should be equal
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg') //assign them both white
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cardsWon.push(cardsChosen) //store correct cards in array
    }else {  //flip cards back over to be played again
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
    }
    cardsChosen = []  //clear these arrays
    cardsChosenId= [] 
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }
}


}

createBoard()  //call the function above

})