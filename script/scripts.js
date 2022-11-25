const calcular = document.querySelector('#calcular')

function imc () {
    const nome = document.querySelector('#nome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value

    console.log(peso)

    imc = peso/(altura * altura) 
    switch (imc) {
        case imc <=18.5:
            console.log('Desnutrido')
            break
        case imc >=18.6 && imc <=24.9:
            console.log('Peso ideal')
            break
        case imc > 24.9:
            console.log('Gorducho')
            break
    }
}


calcular.addEventListener('click', imc)