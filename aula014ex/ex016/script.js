function contar(){
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        /*alert('[Erro] Faltam dados!')*/
    } 
    else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            Window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }

        if(i < f){
            //Contagem Crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else{
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += '\u{1F3C1}'
    }
}