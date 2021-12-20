var name1 = prompt('what is your name?');
var name2 = prompt('what is your name?');

var loveMatch = Math.random() * 100;

loveMatch = Math.floor(loveMatch) + 1;

if (loveMatch > 70) {
    alert("your loveMatch score is: " + loveMatch + "% Match made in heaven!")
} else {
    alert("your loveMatch score is: " + loveMatch + "%" )
}