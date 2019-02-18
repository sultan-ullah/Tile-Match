  // Game Logic
var cards = document.getElementsByClassName('thefront');
for(var i = 0; i < 6; i++) {
    cards[i].addEventListener('click', flipCard);
}
  
var cardToMatch = null;
var score = 0;

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

function resetTiles() {
    var cards = document.getElementsByClassName('thecard');
    for(var i = 0; i < cards.length; i++) {
        cards[i].style.transform = "";
    }
  
}