
function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('life-remaining', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabetValue = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetValue.innerText;
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log("Your random alphabet", alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // console.log(alphabet);

    setBackgroundColorById(alphabet)
}


function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;
    // console.log("player pressed ", playerPressed);

    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        // console.log("You Got a Point");
        // way-2: use get and set fuction getTextElementValueById()
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        // console.log("You lose the life");
        const currentLife = getTextElementValueById('life-remaining');
        const newLife = currentLife - 1;
        setTextElementValueById('life-remaining', newLife);

        if (newLife === 0) {
            gameOver();
        }

        // stop the game if pressed 'Esc';
        if (playerPressed === 'Escape') {
            gameOver();
        }
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyBoardButtonPress);




















/* --- way-1: score and life updated
 if (playerPressed === expectedAlphabet) {
        console.log("You Got a Point");
        // // get corrent score and update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = parseInt(currentScoreElement.innerText);
        // // --- increase the score
        // const newScore = currentScore + 1;
        // // ---- show the updaed score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log("You lose the life");
        // const currentLifeElement = document.getElementById('life-remaining');
        // const currentLife = parseInt(currentLifeElement.innerText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

*/
