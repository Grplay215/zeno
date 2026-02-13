/*************************************************************************************
 *  Objetivo: projeto para realizar calculos para uma escola
 *  Autor: gabriel renato
 *  Data: 13/02/26
 *  Versão: 1.0
 * ***********************************************************************************/


const readline = require('readline')

const entradaDedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDedados.question('Qual o primeiro número? ', function(primeiro){
    let primeiroNumero = primeiro

    entradaDedados.question('Qual o segundo número? ', function(segundo){
        let segundoNumero = segundo

        entradaDedados.question('Qual operação matemática deseja realiza? ', function(math){
            let operacaomatematica = math


    
        let resultado = require('./modulo.js')
        let mate = resultado.operacoes(primeiroNumero, segundoNumero, operacaomatematica)
        
        if(mate){
        let calculo = mate
        //console.log(`o resultado é: ${calculo}`)
        }
        
    
        
          
        
        })
    })
})



     

    





    
