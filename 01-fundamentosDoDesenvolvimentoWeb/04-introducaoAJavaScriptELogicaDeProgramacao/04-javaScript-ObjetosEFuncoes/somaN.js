function somaRecursiva (numero) {
    let soma = numero;
    for (let n = 0; n < numero; n += 1) {
    soma += n;
    }
    return soma;
}
console.log(somaRecursiva(5));
