let contador = 0

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>O número precisa estar entre ${maiorValor} e ${menorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número é menor<i class="fa-solid fa-arrow-down-long"></i></div>
        `
        contador = contador + 1
        console.log(contador)
    } else {
        elementoChute.innerHTML += `
        <div>O número é maior<i class="fa-solid fa-arrow-up-long"></i></div>
        `
        contador = contador + 1
        console.log(contador)
    }

    if (contador > 6) {

        document.body.innerHTML =
            `
            <h2>Game Over! Você excedeu suas tentativas!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "#F3EFE0";
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})