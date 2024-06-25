const express = require("express");
const app = express();
const port = 3000;

const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

const moviesWebRoutes = require("./routes/movies.web.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuracion vistas Pug
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use('/', moviesWebRoutes);

app.use(error404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});