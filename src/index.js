const express = require('express');
const app = express();
const path = require('path');

//settings - Configuraciones de express
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//router    
app.use(require('./routes/index'));

//Static File - Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

//Escuchando al servidor
app.listen(app.get('port'),() => {
    console.log('Servidor en el post ', app.get('port'))
});