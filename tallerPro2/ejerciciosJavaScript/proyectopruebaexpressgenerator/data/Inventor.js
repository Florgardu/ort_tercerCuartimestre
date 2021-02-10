
const fs = require('fs').promises;
const path = __dirname + '/inventorsMOC.json';

// devuelve un json con los inventores
async function readMocInventor(){
    let inventors= await fs.readFile(path, 'utf8');
    // me lee un string lo paso a objeto parseo
    return JSON.parse(inventors);
};

async function writeMocInventor (inventors){
    await fs.writeFile(path,JSON.stringify(inventors,null, ''));
// me llega por parametro un objeto tengo que pasarlo a string/cadena para el json
}

async function getAllInventors(){
    return await readMocInventor();
}

async function getInventor(id){
    const data = await readMocInventor();
    const inventorBuscado =data.inventors.find(inventor => inventor._id == id);
    return inventorBuscado;
}

async function pushInventor(inventor){
 let data=  await readMocInventor();
 data.inventors.push(inventor);
 await writeMocInventor(data);
}

async function updateInventor(inventor){
let idInventorNuevo= inventor._id;
let data=  await readMocInventor();
let encontrado=false;
let posicion=null;
for (let index = 0; index < data.inventors.length; index++) {
    let element = data.inventors[index];
    console.log(inventor.id);
    if (element._id == idInventorNuevo) {
        posicion=index;
        encontrado=true;
    }
}
console.log(posicion);
console.log(encontrado);

if (encontrado) {
    data.inventors[posicion]=inventor;
}
await writeMocInventor(data);

}

async function deleteInventor(id){
let data=  await readMocInventor();
let posicionEliminar= data.inventors.findIndex((element) => element._id == id);
console.log(posicionEliminar);
data.inventors.splice(posicionEliminar,1);
await writeMocInventor(data);

}

module.exports={getAllInventors,getInventor, pushInventor,updateInventor,deleteInventor };