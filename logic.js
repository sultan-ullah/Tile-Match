let colours = ['#29B6F6', '#9CCC65', '#FF7043', '#FFCA28', '#43A047', '#A1887F', '#ad5187'];
let icons = ['dog', 'cat', 'paw', 'pizza-slice', 'hamburger', 'bone', 'car'];
let numCards = 6;

// helper function to get a random colour
const getRandomColour = () => {
    let colourIndex = Math.floor(Math.random()*colours.length);
    return colours.splice(colourIndex, 1);
}

// helper function to get a random icon
const getRandomIcon = () => {
    let iconIndex = Math.floor(Math.random()*icons.length);
    let iconHtml = document.createElement('i');
    iconHtml.className = 'fas fa-' + icons.splice(iconIndex, 1) + ' fa-1x';
    return iconHtml.outerHTML;
}

// shuffle array
const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// create icon and colour combos
let combos = [];
for (let i = 0; i < numCards/2; i++) {
    combos.push({ 'color': getRandomColour(), 'icon': getRandomIcon() });
}

// shuffle positions of the cards
combos.push(...combos);
shuffle(combos);

// set the backs of each card to each combo
let backs = document.getElementsByClassName("back");
for(let i = 0; i < numCards; i++) {
    backs[i].style.backgroundColor = combos[i].color;
    backs[i].innerHTML = combos[i].icon;
}

let cardToMatch = null;
let score = 0;

// callback function for card click event
function flipCard(event) {
    this.disabled = true;
    let card = this.parentElement;
    let icon = card.children[1].innerHTML;

    card.style.transform = "rotateY(180deg)";

    setTimeout( () => {
        if( cardToMatch ) {
            if ( icon === cardToMatch.children[1].innerHTML ) {
                score++;    
            } else {
                card.style.transform = "";
                cardToMatch.style.transform = "";
            }
            cardToMatch = null;
        } else {
            cardToMatch = card;
        }

        if ( score === 3 ) {
            alert('Good Job!');
            resetTiles();
            score = 0;
        }

    }, 500);
}
















const resetTiles = () => {
    let cards = document.getElementsByClassName('card');
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.transform = "";
    }
  
}








let positions = [...Array(numCards).keys()];








let fronts = document.getElementsByClassName("front");
for(let i = 0; i < numCards; i++) {
    fronts[i].addEventListener('click', flipCard);
}