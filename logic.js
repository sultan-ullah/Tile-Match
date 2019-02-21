let colours = ['#29B6F6', '#9CCC65', '#FF7043', '#FFCA28', '#43A047', '#A1887F', '#ad5187'];
let icons = ['dog', 'cat', 'paw', 'pizza', 'hamburger', 'bone', 'car'];
let numCards = 6;

// helper function to get a random colour
const getRandomColour = () => {
    let colourIndex = Math.floor(Math.random()*colours.length);
    return colours.splice(colourIndex, 1);
}

// helper function to get a random icon
const getRandomIcon = () => {
    let iconIndex = Math.floor(Math.random()*icons.length);
    console.log(iconIndex);
    let iconHtml = document.createElement('i');
    iconHtml.className = 'fas fa-' + icons.splice(iconIndex, 1) + ' fa-2x';
    console.log(iconHtml.outerHTML);
    return iconHtml.outerHTML;
}


var cardToMatch = null;
var score = 0;

// callback function for card click event
function flipCard(event) {
    this.disabled = true;
    var card = this.parentElement;
    var textOnBack = card.children[1].textContent;
    card.style.transform = "rotateY(180deg)";

    setTimeout(function(){
        
        if (cardToMatch !== null) {
            var textToMatch = cardToMatch.children[1].textContent;
            if (textOnBack === textToMatch) {
                console.log("Matched!");
                score++;
            } else {
                card.style.transform = "";
                cardToMatch.style.transform = "";
            }
            cardToMatch = null;
        } else {
            cardToMatch = card;
        }

        if (score === 3) {
            alert("Good Job!");
            score = 0;
            resetTiles();
        }

    }, 500);
}
















const resetTiles = () => {
    let cards = document.getElementsByClassName('card');
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.transform = "";
    }
  
}





















let backs = document.getElementsByClassName("back");
for(let i = 0; i < numCards; i++) {
    backs[i].style.backgroundColor = getRandomColour();
    backs[i].innerHTML = getRandomIcon();
}





let fronts = document.getElementsByClassName("front");
for(let i = 0; i < numCards; i++) {
    fronts[i].addEventListener('click', flipCard);
}