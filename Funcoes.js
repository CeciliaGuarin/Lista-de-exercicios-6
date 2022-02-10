function Exer_1(){
    
    let vetor = []
    let impares = []
    let pares = []
    
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
   
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            
            pares.push(vetor[i])            
        }
        else {
            
            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e qtde ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e qtde ${impares.length}`)
    alert(`Elementos pares ${pares} e qtde ${pares.length}`)
    alert(`Elementos ímpares ${impares} e qtde ${impares.length}`)
}

function Exer_2(){
     let vetor = []
     let m2 = []
     let m3 = []
     let m23 = []
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
   
    for(let i=0;i<7;i++){
        if (vetor[i] % 2 == 0) {
            
            m2.push(vetor[i])            
        }
        if (vetor[i] % 3 == 0) {
            m3.push(vetor[i])       
        }
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            m23.push(vetor[i])       
        }
    }
    console.log(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    console.log(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    console.log(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
    alert(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    alert(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    alert(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
}

function Exer_3() { 

}

function Exer_4() {
    let num = []
    let posicoes = []

    for(let i=0;i<15;i++){
        num[i] = Number(prompt(`Informe o número ${i+1}`))

        if (vetor[i] == 30){
            posicoes = i
        }
        alert(posicoes)
    }
}

function Exer_5() {}