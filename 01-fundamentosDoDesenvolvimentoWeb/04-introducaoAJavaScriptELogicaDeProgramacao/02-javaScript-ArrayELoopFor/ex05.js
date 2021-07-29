let numbers = [500, 9, 3, 19, 70, 8, 10, 2, 35, 207];
let atual = 0;
let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (atual > numbers[index]) {
        maior = atual;
        atual = maior;
    } else {
        maior = numbers[index];
        atual = maior;
    }
}

console.log(maior)
