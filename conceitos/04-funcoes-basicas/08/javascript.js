/* Stand in line */

function nextInLine (arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("Depois: " + JSON.stringify(testArr));