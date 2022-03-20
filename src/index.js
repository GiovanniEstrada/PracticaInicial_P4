const express = require('express');
const app = express();


//Settings
app.set('port',process.env.PORT || 4000);

//Acciones Iniciales
app.use(express.json());

//Routes
app.use(require('./Routes/rutas'));

//Start server
app.listen(app.get('port'), () => {
    console.log('Server run in port', app.get('port'))
});