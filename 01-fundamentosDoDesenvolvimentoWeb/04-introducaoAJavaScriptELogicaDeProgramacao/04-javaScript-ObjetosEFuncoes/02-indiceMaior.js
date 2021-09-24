function indiceMaior (list) {
    let maior = list[0];
    let index = 0;
    for (let i = 1; i < list.length; i += 1) {
        if (maior < list[i]) {
            maior = list[i];
            index = i;
        }
    }
    return index;
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]))