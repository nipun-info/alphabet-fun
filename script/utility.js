function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStr.split("");

    // get a random index between 0 - 25;
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(alphabet, index);
    return alphabet;

}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    // console.log(element);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
