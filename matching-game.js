setTimeout(function(){
    
}, 3000);


var colors = ['#29B6F6', '#9CCC65', '#FF7043'];
var letters = ['A', 'B', 'C'];
var grid = 
[
{'color': colors[0], 'letter': letters[0]}, {'color': colors[1], 'letter': letters[1]}, {'color': colors[2], 'letter': letters[2]},
{'color': colors[0], 'letter': letters[0]}, {'color': colors[1], 'letter': letters[1]}, {'color': colors[2], 'letter': letters[2]}    
];

var prevText = "";
var prevParent = "";

var cards = document.getElementsByClassName("theback");
for(var i = 0; i < 6; i++) {
    var card = cards[i];
    card.style.backgroundColor = grid[i]['color'];
    card.innerHTML = '<p>' + grid[i]['letter'] + '</p>';
}

function flipCard(event) {
    console.log(event);
    var currParent = event.target.parentElement;
    var currText = currParent.children[1].textContent;
    console.log("prevText:" + prevText);
    console.log("prevParent:" + prevParent.textContent);

     
    currParent.style.transform = "rotateY(180deg)";

    setTimeout(function(){
        if (prevText === "") {
            prevText = currText;
            prevParent = currParent;
        } else {
            if (prevText === currText) {
                console.log("Matched!")
            } else {
                currParent.style.transform = "";
                prevParent.style.transform = "";   
            }
            prevText = "";
            prevParent = "";    
        }
    }, 2000);
        







    
    
    
    
    
    
    
    // console.log('clicked');
    // console.log(event);
    // console.log(event.target.parentElement);
    // console.log(event.target.textContent);
    
    // setTimeout(function () {
    //     obj.style.transform = "";
    // }, 2000);

    // if (selectedText == "") {
    //     selectedText = event.target.textContent;
    //     selectedElement = event.target.parentElement;
    //     // setTimeout(function () {
    //     //     obj.style.transform = "";
    //     // }, 2000);
    // } else {
    //     if (selectedText === event.target.textContent) {
    //         console.log("Matched!");
    //     } else {
    //         obj.style.transform = "";
    //         selectedElement.style.transform = "";
    //     }
    //     selectText = "";
    //     selectedElement = "";
    // }   
}

var cards = document.getElementsByClassName('thecard');
for(var i = 0; i < 6; i++) {
    cards[i].addEventListener('click', flipCard);
}
