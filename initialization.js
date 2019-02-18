var colors = ['#29B6F6', '#9CCC65', '#FF7043', '#FFCA28', '#43A047', '#A1887F', '#00B0FF'];
var letters = ['A', 'B', 'C'];
var combos = []

letters.forEach((letter) => {
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    var index = colors.indexOf(randomColor);
    colors.slice(index, 1);
    combos.push({'letter': letter, 'color': randomColor});
});

combos.forEach((combo) => {
    combos.push(combo);
});

shuffle(combos);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


  var cards = document.getElementsByClassName("theback");
  for(var i = 0; i < 6; i++) {
      var card = cards[i];
      card.style.backgroundColor = combos[i]['color'];
      card.innerHTML = '<p>' + combos[i]['letter'] + '</p>';
  }
  