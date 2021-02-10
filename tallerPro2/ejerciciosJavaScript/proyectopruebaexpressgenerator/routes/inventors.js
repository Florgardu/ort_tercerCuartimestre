let express = require('express');
let router = express.Router();
const dataInventor = require('../data/Inventor');

/* GET listado con todos los inventores */
router.get('/', async function(req, res) {
  const data = await dataInventor.getAllInventors();
  res.json(data); 
});

/* GET un inventor especifico */
router.get('/:id', async function(req, res) {
    const inventor = await dataInventor.getInventor(req.params.id);
    if(inventor){
      res.json(inventor);
    }else{
      res.status(404).json({});
    }

  });
  
/* ALTA (POST) DE un inventor */

router.post('/', async function(req, res, next) {
  let inventorNuevo= req.body;
  await dataInventor.pushInventor(inventorNuevo);
  const inventorPersistido = await dataInventor.getInventor(inventorNuevo._id);
  res.json(inventorPersistido);  
   });

/* MODIFICACIÓN (PUT) DE un inventor */
router.put('/', async function(req, res, next) {
    let inventorNuevo= req.body;
    await dataInventor.updateInventor(inventorNuevo);
    const inventorCambiado = await dataInventor.getInventor(inventorNuevo._id);
    res.json(inventorCambiado); 
  });

/* ELIMINACIÓN (DELETE) DE un inventor */
router.delete('/:id', async function(req, res, next) {
  let inventorId = req.params.id;
  await dataInventor.deleteInventor(inventorId);
  res.end();
  });



module.exports = router;
