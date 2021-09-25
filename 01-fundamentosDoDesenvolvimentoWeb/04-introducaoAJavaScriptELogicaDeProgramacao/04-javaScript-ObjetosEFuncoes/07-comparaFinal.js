function verificaFimPalavra (palavra, fimPalavra) {
    const palavraFinal = palavra.split('').slice((palavra.length - fimPalavra.length), palavra.length).join('');
    const resultado = (palavraFinal == fimPalavra) ? true : false;
    return resultado;
}
console.log(verificaFimPalavra ('trybe', 'be'));