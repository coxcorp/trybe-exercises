function nomeMaior (list) {
    let maior = list[0].length;
    let nome = list[0];
    for (let i = 1; i < list.length; i += 1) {
        if (maior < list[i].length) {
            maior = list[i].length;
            nome = list[i];
        }
    }
    return nome;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))