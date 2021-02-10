console.log('JQuery vs JS')

var oculto = false

/* --------------------------------------------------------------- */
/*                         CON JAVASCRIPT                          */
/* --------------------------------------------------------------- */
/*
document.querySelector('#parrafo').style.color = 'green'
/function onBoton() {
//var onBoton = function() {
var onBoton = () => {    
    oculto = !oculto
    console.log(oculto)

    document.querySelector('#parrafo').style.display = oculto? 'none':'block'
    document.querySelector('button').innerText = oculto? 'Mostrar':'Ocultar'
}
document.querySelector('button').onclick = onBoton */

/* --------------------------------------------------------------- */
/*                           CON JQUERY                            */
/* --------------------------------------------------------------- */
$('#parrafo').css('color','green')
var onBoton = () => {    
    oculto = !oculto
    console.log(oculto)

    if(oculto) $('#parrafo').hide()
    else $('#parrafo').show()

    $('button').text(oculto? 'Mostrar':'Ocultar')
}
$('button').click(onBoton)

//----------------------------------------------------------
$('.texto').mouseover(onMouseOver)
$('.texto').mouseout(onMouseOut)

function onMouseOver() {
    console.log('El mouse está por encima del elemento')
    $('.texto').css('color','#fff')
    $('.texto').css('background-color','#000')
}

function onMouseOut() {
    console.log('El mouse está fuera del elemento')
    $('.texto').css('color','')
    $('.texto').css('background-color','')
}