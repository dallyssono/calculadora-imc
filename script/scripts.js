const calcular = document.querySelector('#calcular')

function imc () {
    let nome = document.querySelector('#nome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const resultado = document.querySelector('#resultado')

    if (nome == "") nome = 'Amigo'
    if (peso == "" || altura == "") {
        alert('Você precisa preencher pelo menos o peso e a altura.')
    } else {

    imc = peso/(altura * altura) 

    if (imc < 18.5) {
        resultado.innerHTML = `${nome}, seu peso está abaixo do normal.`
    } else if (imc >= 18.5 && imc <=24.9) {
        resultado.innerHTML = `${nome}, seu peso está normal.`
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `${nome}, você está acima do peso.`
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `${nome}, você está obeso. \n Obesidade classe I`
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `${nome}, você está obeso.\n Obesidade classe II`
    } else {
        resultado.innerHTML = `${nome}, você está obeso. \n Obesidade classe III`
    }
}
}


calcular.addEventListener('click', imc)