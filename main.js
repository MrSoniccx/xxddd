var btnSelect = document.querySelector('#btnSelect')
var btnOpcion = document.querySelector('#btnOpcion')

btnSelect.addEventListener('click', () =>
{
    let opcion = document.querySelector('#seccion').value
    let resultado = document.querySelector('#resultado')

    resultado.value = opcion
})

btnOpcion.addEventListener('click', () => {
    let nombre = document.querySelector('#nombre').value
    let opcion = document.querySelector('#seccion')
    let newOp = document.createElement('option')

    newOp.value = nombre
    newOp.text = nombre

    opcion.add(newOp)
})