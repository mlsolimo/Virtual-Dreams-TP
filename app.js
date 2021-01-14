const express = require("express");
const bodyParser = require("body-parser");
const rp = require('request-promise');
const { map } = require("bluebird");
const app = express();
const port = 3000;

let options = {
    method: 'POST',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    body: {
        nombre: '',
        apellido: '',
        dni: 0
    },
    json: true
};

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/crearPersonas.html");
})


function agregarError(errorMap, campo, mensaje) {
    
    if (errorMap[campo] === undefined)
        errorMap[campo] = [mensaje];
    else
        errorMap[campo].push(mensaje);
    
    return errorMap;
}



app.post('/', (req, res) => {

        const body = req.body
        const keys = Object.keys(body);
        const regex = /^[A-Z]+$/i;
        let errores = {};

        if (keys.length > 3)
            errores = agregarError(errores, 'error', 'Debe haber menos de 3 campos de formulario');

        if (body.dni.length == 0 || body.apellido.length == 0)
            errores = agregarError(errores, 'error', 'El DNI o apellido vacio');    

        if (!regex.test(body.nombre) || !regex.test(body.apellido))
            errores = agregarError(errores, 'error', 'El nombre o apellido contiene caracteres invalidos');

        if (isNaN(body.dni))
            errores = agregarError(errores, 'error', 'El DNI contiene caracteres invalidos');

        if (body.dni.length > 10)
            errores = agregarError(errores, 'error', 'El DNI contiene mas de 10 caracteres');
     
        if (Object.keys(errores).length > 0)
            res.status(400).send(errores);
        else {
            body.dni = parseInt(body.dni)
            options.body = body;
        
            rp(options)
            .then(function (parsedBody) {
                res.status(201).send(parsedBody);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
        }
})

app.listen(port, () => {
    console.log(`Servidor en escucha de http://localhost:${port}`);
})