
function diceChanger(){

    const randomNumber1 =Math.floor(Math.random()*6+1);
    const randomNumber2 =Math.floor(Math.random()*6+1);

document.querySelector('.img1').setAttribute('src', "images/dice" +randomNumber1 + ".png");
document.querySelector('.img2').setAttribute('src', "images/dice" +randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
    document.getElementById('hello').innerHTML = '<img class="flag" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.graphicsfuel.com%2Fwp-content%2Fuploads%2F2011%2F11%2Fflag-icon-512.png&f=1&nofb=1" alt="flag" />Player 1 Win!';
}
    else if (randomNumber1 < randomNumber2) {
    document.getElementById('hello').innerHTML = 'Player 2 Win!<img class="flag" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.graphicsfuel.com%2Fwp-content%2Fuploads%2F2011%2F11%2Fflag-icon-512.png&f=1&nofb=1" alt="flag" />';
}
    else {
    document.getElementById('hello').innerHTML = 'Draw!';
    }

}