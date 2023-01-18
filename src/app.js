const express = require('express')
const path = require('path');
const methodOverride = require('method-override');

const mainRout = require('./routers/mainRouters');
const categRoute = require('./routers/categRouter');
const cuentaRoute = require('./routers/cuentaRouter');
const clienteRoute = require('./routers/clienteRouter');
const mainApiRout = require('./api/apirouters/mainApiRouter');
const catApiRoute = require('./api/apirouters/categApiRouter');
const cuentaApiRoute = require('./api/apirouters/cuentaApiRouter');
const clienteApiRoute = require('./api/apirouters/clienteApiRourer');

const app = express();
const PORT = 3015;

// Static
app.use(express.static(path.resolve(__dirname,'../public')));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));
// Views
app.set('views', path.resolve(__dirname,'./views'));
app.set('view engine','ejs');

app.use('/',mainRout);
app.use('/categoria', categRoute);
app.use('/cuenta', cuentaRoute);
app.use('/cliente',clienteRoute);
app.use('/api',mainApiRout);
app.use('/api/categoria', catApiRoute);
app.use('/api/cuenta', cuentaApiRoute);
app.use('/api/cliente', clienteApiRoute);

app.listen(PORT,() => {
     console.log(`Server en puerto ${PORT}`)
    });
