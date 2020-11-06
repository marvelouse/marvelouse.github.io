//Überschrift ändern
//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hallo Helena!';

//Alart Meldung
//document.querySelector('html').onclick = function() {
  //  alert('Hey Helena! Nicht so viel klicken!');
//}


//Bild ändern durch Click auf das Bild
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/smile.png') {
      myImage.setAttribute ('src','bilder/sadsmile.png');
    } else {
      myImage.setAttribute ('src','bilder/smile.png');
    }
}

//Button einfügen
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hallo, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hallo, ' + storedName;
}
// Aktion des Drückens dem Button zuordnen
myButton.onclick = function() {
  setUserName();
}