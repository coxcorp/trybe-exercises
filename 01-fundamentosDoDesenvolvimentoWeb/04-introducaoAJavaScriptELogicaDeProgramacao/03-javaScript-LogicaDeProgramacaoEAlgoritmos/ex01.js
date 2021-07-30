let n = 5;
let linha = '';

for(let i = 1; i <= n; i += 1) {
    linha = linha + '*';
}

for(let j = 1; j <= n; j += 1) {
    console.log(linha);
}
