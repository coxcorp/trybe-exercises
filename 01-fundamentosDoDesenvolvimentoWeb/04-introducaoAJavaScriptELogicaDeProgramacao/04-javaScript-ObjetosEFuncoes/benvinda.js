let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let chaves in info) {
    if (chaves === 'recorrente' && info[chaves] === 'Sim' && info2[chaves] === 'Sim') {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[chaves] + ' e ' + info2[chaves]);
    }
  }
  

  info.recorrente = 'Sim';

  console.log('Bem-vinda, '+ info.personagem)

  console.log(info);

  for(let chaves in info){
    console.log(chaves);
  }
  
  for(let chaves in info){
    console.log(info[chaves]);
  }
  