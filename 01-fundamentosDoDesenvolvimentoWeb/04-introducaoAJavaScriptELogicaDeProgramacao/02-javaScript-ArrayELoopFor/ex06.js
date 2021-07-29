let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let ehImpar = null;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        ehImpar += 1;
    }
}

console.log(ehImpar)
