// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector


var ulElem = document.getElementById('secondElement');
ulElem.removeChild(ulElem.childNodes[2])