let n = 5;
let linha = '';



for(let i = 1; i <= n + 1; i += 1) {
    console.log(linha);
    for(let j = 1; j <= n; j += 1) {
        linha = linha + '*';
        break
    }
}
