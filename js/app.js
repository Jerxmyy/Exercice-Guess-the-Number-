const inputValue = document.getElementById("inputValue")
const btnCheck = document.getElementById("btnCheck")
const textTry = document.getElementById("textTry")
const textResponse = document.getElementById("textResponse")

function randInt(mini, maxi) {
    return mini + Math.floor(maxi + Math.random())
}
for (let i = 1; i < 100; i++) {
    console.log(randInt(1, 6));
}
let computerNumber = randInt(1, 100);
console.log(computerNumber);

let guessTry = 10;

btnCheck.onclick = function () {
    let userNumber = inputValue.value;
    console.log(userNumber);
    if (userNumber == computerNumber) {
        console.log("Bravo");
    } else {
        if (userNumber > computerNumber) {
            console.log("Top grand");
        } else {
            console.log("Trop petit");
        }
        guessTry--;
        if (guessTry == 0) {
            console.log(Perdu)
        }
    }
}