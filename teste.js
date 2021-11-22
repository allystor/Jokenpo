
//PAPEL = 0
//PEDRA = 1
//TESOURA = 2

vitoria = 0
empates = 0
derrotas = 0

function jogarPapel() {
    MAQUINA =  Math.floor(Math.random() * 3);
    if(MAQUINA == 0) {
        maquina = "papel"
        document.getElementById("retorno").innerHTML = `Empate, ambos escolheram papel.`
        empates = empates + 1
        document.getElementById("retornoEmpate").innerHTML = `${empates}`
    }
    else if (MAQUINA == 1) {
        MAQUINA = "pedra"
        document.getElementById("retorno").innerHTML = `Parabéns você ganhou!!! A máquina escolheu pedra.`
        vitoria = vitoria + 1
        document.getElementById("retornoVitoria").innerHTML = `${vitoria}`
    }
    else if(MAQUINA == 2) {
        MAQUINA = "tesoura"
        document.getElementById("retorno").innerHTML = `Você perdeu, a máquina escolheu tesoura.`
        derrotas = derrotas + 1
        document.getElementById("retornoDerrota").innerHTML = `${derrotas}`
        
    }
    
}

function jogarPedra() {
    MAQUINA =  Math.floor(Math.random() * 3);
    if(MAQUINA == 0) {
        MAQUINA = "papel"
        document.getElementById("retorno").innerHTML = `Você perdeu, a máquina escolheu papel.`
        derrotas = derrotas + 1
        document.getElementById("retornoDerrota").innerHTML = `${derrotas}`
    }
    else if (MAQUINA == 1) {
        MAQUINA = "pedra"
        document.getElementById("retorno").innerHTML = `Empate, ambos escolheram pedra.`
        empates = empates + 1
        document.getElementById("retornoEmpate").innerHTML = `${empates}`
    }
    else if(MAQUINA == 2) {
        MAQUINA = "tesoura"
        document.getElementById("retorno").innerHTML = `Parabéns você ganhou!!! A máquina escolheu tesoura.`
        vitoria = vitoria + 1
        document.getElementById("retornoVitoria").innerHTML = `${vitoria}`
    }
}

function jogarTesoura() {
    MAQUINA =  Math.floor(Math.random() * 3);
    if(MAQUINA == 0) {
        MAQUINA = "tesoura"
        document.getElementById("retorno").innerHTML = `Empate, ambos escolheram tesoura.`
        empates = empates + 1
        document.getElementById("retornoEmpate").innerHTML = `${empates}`
    }
    else if (MAQUINA == 1) {
        MAQUINA = "papel"
        document.getElementById("retorno").innerHTML = `Parabéns você ganhou!!! A máquina escolheu papel.`
        vitoria = vitoria + 1
        document.getElementById("retornoVitoria").innerHTML = `${vitoria}`
    }
    else if(MAQUINA == 2) {
        MAQUINA = "pedra"
        document.getElementById("retorno").innerHTML = `Você perdeu, a máquina escolheu pedra.`
        derrotas = derrotas + 1
        document.getElementById("retornoDerrota").innerHTML = `${derrotas}`
    }
}
function Resetar() {
    empates = empates * 0
    document.getElementById("retornoEmpate").innerHTML = `${empates}`
    vitoria = vitoria * 0
    document.getElementById("retornoVitoria").innerHTML = `${vitoria}`
    derrotas = derrotas * 0
    document.getElementById("retornoDerrota").innerHTML = `${derrotas}`
}

