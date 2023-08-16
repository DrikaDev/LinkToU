// Escreva uma função que receba um array de números e retorne 
// o segundo maior e o segundo menor elemento desse array. 
// Por exemplo, se o array for [1, 2, 3, 4, 5], a função deve retornar [2, 4]. 
// Você pode assumir que o array tem pelo menos dois elementos e que não há elementos repetidos.

function segundoMenorMaiorElemento (array) {

    //variaveis para guardar o segundo menor elemento do array
    let menor = Math.min(array[0], array[1]); //menor valor encontrado
    let segundoMenor = Math.max(array[0], array[1]); //segundo menor valor encontrado
    
    //variaveis para guardar o segundo maior elemento do array
    let maior = segundoMenor; //maior valor encontrado
    let segundoMaior = menor; //segundo maior valor encontrado

    // iterar o array a partir do indice 2 para avaliar os números a partir do terceiro elemento do array
    for (let i = 2; i < array.length; i++) {
        const num = array[i]; // recebe o número atual do array

        //condição para verificar se o número atual do array é menor que o menor valor encontrado
        if (num < menor){
            segundoMenor = menor; //O menor valor será o segundoMenor
            menor = num; //O menor agora é o número atual
        }else if (num < segundoMenor){
            segundoMenor = num; //Atualiza o valor do segundo menor
        }

        //condição para verificar se o número atual do array é maior que o maior valor encontrado
        if (num > maior){
            segundoMaior = maior; //O maior valor será o segundoMaior
            maior = num; //O maior agora é o número atual
        }else if (num > segundoMaior){
            segundoMaior = num; //Atualiza o valor do segundo maior 
        }
    }

    return [segundoMenor, segundoMaior]
}

let numeros = [1, 2, 3, 4, 5];
let resultado = segundoMenorMaiorElemento(numeros);
console.log(resultado);  // Saída esperada: [2, 4]