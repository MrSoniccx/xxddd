var btnSelect = document.querySelector('#btnSelect')
var btnOpcion = document.querySelector('#btnOpcion')
var btnLista = document.querySelector('#btnLista')
var btnTable = document.querySelector('#btnTable')

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

btnLista.addEventListener('click', () => {
    let nombre = document.querySelector('#nombre').value
    let lista = document.querySelector('#lista')
    let newItem = document.createElement('li')

    newItem.textContent = nombre
    

    lista.appendChild(newItem)
})

btnTable.addEventListener('click', () =>{
    let nombre = document.querySelector('#nombre').value
    let tabla = document.querySelector('#tablita')
    let renglon = tabla.insertRow(-1)
    let celda = renglon.insertCell(0)

    celda.textContent = nombre

})