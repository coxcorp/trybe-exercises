let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let atual;
let maior;

for (let index = 0; index < numbers.length; index += 1) {
    if (atual > numbers[index]) {
        maior = atual;
    } else {
        maior = numbers[index];
    }
    atual = maior;
}

console.log(maior)
