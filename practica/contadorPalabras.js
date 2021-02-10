let text= "hola amigos, cómo estan? hola buen día, amigos mios cómo los trata el día, día lluvioso. ";

function palabrasRepetidas(text){
    let dict = {
        palabra: '',
        cantidad: 0,
    };
    let palabrasSeparadas= text.split(" ");
    for (let palabra in palabrasSeparadas) {
        if (normalize(palabra) in dict) {
         ++dict.cantidad[normalize(palabra)];   
        } else{
            dict[normalize(palabra)]=1;   
        }
    }
}
function normalize(palabra){
  return  palabra.toLowerCase().replace("," ,"").replace(".", "").replace("?", "");
}

console.log(normalize(text));


