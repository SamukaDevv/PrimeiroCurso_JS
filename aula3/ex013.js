var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

/*na linha abaixo, podera tirar as barras e escolher um                                                  numero de 1 á 6 que ira representar um dia da semana. 
Exeto o numero 7 que irar da erro*/

//diaSem = 7

//console.log()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
}switch(diaSem){
    case 1:
        console.log('Segunda')
        break
}switch(diaSem){
    case 2:
        console.log('Terça')
        break
}switch(diaSem){
    case 3:
        console.log('Quarta')
        break
}switch(diaSem){
    case 4:
        console.log('Quinta')
        break
}switch(diaSem){
    case 5:
        console.log('Sexta')
        break
}switch(diaSem){
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO!] Dia Invalido')
}