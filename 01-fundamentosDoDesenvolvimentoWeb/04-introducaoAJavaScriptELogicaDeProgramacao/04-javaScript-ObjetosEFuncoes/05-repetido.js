function repetido (list) {
    let contador = 0;
    let acumulador = 0;
    let repetido = 0;
    for (let i = 0; i < list.length; i += 1) {
        let numero = list[i];
        for (let j = 0; j < list.length; j += 1) {
            if (numero == list[j]) {
                contador += 1;
            }
        }
        if (contador > acumulador) {
            acumulador = contador;
            repetido = list[i];
        }
        contador = 0;
    }
    return repetido;
}
console.log(repetido([2, 3, 5, 5, 5, 2, 3]))