let custo = -10;
let venda = 20;

let lucro = (venda - (custo * 1.2)) * 1000;

if (custo < 0 || venda < 0) {
    console.log('erro');
} else {
    console.log('Lucro: ' + lucro);
}