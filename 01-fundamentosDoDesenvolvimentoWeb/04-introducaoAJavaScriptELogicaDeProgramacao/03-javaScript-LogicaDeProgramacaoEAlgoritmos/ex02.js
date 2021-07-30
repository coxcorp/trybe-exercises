let n = 3;
let linha = '';
let simbolo = '*';

for(let i = 0; i <= n; i += 1) {
    console.log(linha);
    for(let j = 0; j < n; j += 1) {
        linha = linha + simbolo;
        break
    }
}
