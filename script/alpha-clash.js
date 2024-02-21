
function play() {
    // hide the home screen
    // document.getElementById('home-screen').classList.add('hidden');

    // show the playground
    // document.getElementById('play-ground').classList.remove('hidden');

    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log("Your random alphabet", alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    console.log(alphabet);

    setBackgroundColorById(alphabet)
}


