let bruto = 3000;
let inss;
let ir;

if (bruto <= 1556.94) {
    inss = bruto * 0.08;
} else if (bruto <= 2594.92) {
    inss = bruto * 0.09;
} else if (bruto <= 5189.82) {
    inss = bruto * 0.11;
} else {
    inss = 570.88;
}

let liquido = bruto - inss;

if (liquido <= 1903.98) {
    ir = 0;
} else if (liquido <= 2826.65) {
    ir = (liquido * 0.075) - 142.80;
} else if (liquido <= 3751.05) {
    ir = (liquido * 0.15) - 354.80;
} else if (liquido <= 4664.68) {
    ir = (liquido * 0.225) - 636.13;
} else {
    ir = (liquido * 0.275) - 869.36;
}

console.log('Salário: ' + (liquido - ir))