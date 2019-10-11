var btnUno = document.querySelector('#btnUno')
var btnDos = document.querySelector('#btnDos')


btnUno.addEventListener('click', () =>
{
    let num1 = document.querySelector('#num1').value

    let resultado = document.querySelector('#resultado')
    resultado.value = null
    for(num1 ; num1 < 10; num1++)
    {
    resultado.value = resultado.value + num1
    }
})

btnDos.addEventListener('click', () =>{
    let resultado = document.querySelector('#resultado')
    resultado.value = null
for(let i=0; i <= 100; i=i+5){
    resultado.value = (resultado.value + i)+", ";
}
})