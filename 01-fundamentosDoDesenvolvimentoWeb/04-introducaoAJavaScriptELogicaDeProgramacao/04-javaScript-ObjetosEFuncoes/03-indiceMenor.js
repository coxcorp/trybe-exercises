function indiceMenor (list) {
    let menor = list[0];
    let index = 0;
    for (let i = 1; i < list.length; i += 1) {
        if (menor > list[i]) {
            menor = list[i];
            index = i;
        }
    }
    return index;
}

console.log(indiceMenor([2, 3, 6, 7, 10, 11]))