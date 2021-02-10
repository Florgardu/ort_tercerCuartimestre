import express from 'express'; 
import morgan from 'morgan'; 


const server= express();  // lo ejecuto y me crea un servidor que guardo en una variable(Es el servidor)


//function logger(req, res, next){
  //  console.log('request recibida');
   // next();
//}


//Settings: son como configuraciones básicas sobre el proyecto (en el primer parametro es el nombre y el segundo el valor)
server.set('AppName', 'Mi primera app de prueba');
server.set('port', 3000);
server.set('view engine', 'ejs');


//Middleware:
server.use(express.json()); // middelware. siempre deben ir antes de las rutas. 
server.use(morgan('dev')); // todos los middelware se ejecutan usando .use 

//server.all('/user' , function(req, res, next){   //es solo para la ruta /user
 //   console.log('por aquí paso');
 //   next();
//})

//ROUTES:

//pasar info a una vista (antes debo instalar el ejs que es la vista)
server.get('/', (req, res)=> {
    const data = [{name: 'flor'}, {name: 'fede'}, {name: 'juli'}, {name: 'mati'}];
    res.render('index.ejs', {people: data}); 
} );

server.get('/userHome' , function(req, res){ 
    res.send('<h1> Peticion GET recibida</h1>');
    res.end();
});

server.get('/user' , function(req, res){ 
    res.json({
        username:'Damian',
        lastname:'Garcia'
    });
    res.end();
});

server.post('/user/:id' , function(req, res){ 
    console.log(req.body);  // mostrar el cuerpo de la petición, lo que me enviaron en este caso un json 
    console.log(req.params); // mostrar el parametro de la petición, en este caso el id. 
    res.send('<h1> Post request recibida</h1>');
    res.end();
});

server.delete('/user/:UserId' , function(req, res){ 
    res.send(`User ${req.params.UserId} ha sido eliminado`);
});

server.put('/user/:id' , function(req, res){ 
    console.log(req.body);
    res.send(`User ${req.params.id} ha sido actualizado`);
    res.end();
});


server.use(express.static('public'));

server.listen(server.get('port'), function() {
console.log(server.get('AppName'));
console.log("server on port", server.get('port'));
});

