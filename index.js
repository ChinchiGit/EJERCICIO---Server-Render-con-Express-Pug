const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());


const morgan = require('./middlewares/morgan')
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

const filmsRoutes = require("./routes/films")


//conficguracion PUG
app.set('view engine', 'pug');
app.set('views','./views');


app.use(express.static('public'));

app.use('/', filmsRoutes);


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app