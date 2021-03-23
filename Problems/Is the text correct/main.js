const isCorrectText = true;
// write your function here
let checkingText = new Promise(function (resolve, reject) {
    if (isCorrectText) {
        resolve("Your text is correct");
    }
});