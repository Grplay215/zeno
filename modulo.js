/*************************************************************************************
 *  Objetivo: projeto para realizar calculos comuns
 *  Autor: gabriel renato
 *  Data: 13/02/26
 *  Versão: 1.0
 * ***********************************************************************************/



function operacoes (primeiro, segundo, math){
    let calculos = math
    let um = Number(primeiro)
    let dois = Number(segundo)

    if(um == '' ||isNaN(um) ||isNaN(dois) || dois == ''){
        console.log('ERRO: Não é permitido letras ou deixar vazio o espaço dos números')
        return console
       

    }
    else if(calculos == 'soma'){
        let soma = um + dois
        console.log(soma)
        return console
        
    }

    else if (calculos == 'subtração' || calculos == 'subtracao'){
        let subtracao = um - dois
        console.log(subtracao)
        return console
        
    }
    
    else if(calculos == 'divisão' || calculos == 'divisao'){
        let divisao = um/dois
        if(um == '0' || dois == '0' || dois == '' || um == ''){
            let zero = 'ERRO: Não é permitido 0 na divisão de nenhum dos lados'
            console.log(zero)
            return console
        }
        else {console.log(divisao)
        return console}
       
    }
    
    else if(calculos == 'multiplicação' || calculos == 'multiplicacao'){
        let multi = um*dois
        console.log(multi)
        return console
        
    }

}


module.exports = {
    
    operacoes
}