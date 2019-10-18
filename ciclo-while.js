var btnUno = document.querySelector('#btnUno')
var btnDos = document.querySelector('#btnDos')
var btnTres = document.querySelector('#btnTres')


btnUno.addEventListener('click', () =>
{
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let lista = document.querySelector('#miSelect')
    
    let resultado = document.querySelector('#resultado')
    resultado.value = null
    while(num1 <= num2)
    {
        let opcion = document.createElement('option')
    opcion.value = num1
    opcion.text = num1
    lista.add(opcion)


    num1++

    }
    
    
    
})

btnTres.addEventListener('click', () =>
{
    let num1 = document.querySelector('#num1').value
    let select = document.querySelector('#miSelect')
    let lista = document.querySelector('#miList')
    
let i = 1
    while(i <= num1)
    {
        let opcion = document.createElement('option')
        let hola = prompt("inserte un numero");
        let li = document.createElement('li')
    opcion.value = hola
    opcion.text = hola
    select.add(opcion)

    li.textContent = hola
    lista.appendChild(li)


    i++

    }
    
    
    
})