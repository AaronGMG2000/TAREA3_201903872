//create NodeJs server whit express
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hola Mundo 201903872');
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})