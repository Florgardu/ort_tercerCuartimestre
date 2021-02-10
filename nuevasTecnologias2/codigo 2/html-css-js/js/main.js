console.log('Bienvenidos!')

var refParrafo = document.getElementById('parrafo')
//refParrafo.innerText = 'Hola!'
refParrafo.style.color = 'magenta'
refParrafo.style.backgroundColor = 'black'
console.log(refParrafo.innerText)

var refTitulo = document.getElementById('titulo')
refTitulo.innerHTML = '<i>Lo cambié!</i>'
console.log(refTitulo.innerText)
console.log(refTitulo.innerHTML)

var refLista = document.getElementById('lista')
refLista.innerHTML = '<ul>'+
                        '<li>item1</li>' + 
                        '<li>item2</li>' + 
                        '<li>item3</li>' + 
                      '</ul>'

                      