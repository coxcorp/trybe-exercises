let n = 2;
let linha = '';
let simbolo = '*';

for(let i = 0; i < n; i += 1) {
    linha = linha + simbolo;
}

for(let j = 0; j < n; j += 1) {
    console.log(linha);
}
