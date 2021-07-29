let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let soma = null;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index]
}

if ((soma / numbers.length) > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}