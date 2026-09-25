function inverterFila(arr, item) {
    arr.push(item);
    return arr.pop()
}

var meuArray = [1, 2, 3, 4,];

console.log("Antes: " + JSON.stringify(meuArray));
console.log("Elemento removido: " + inverterFila(meuArray, 5));
console.log("Depois: " + JSON.stringify(meuArray));
