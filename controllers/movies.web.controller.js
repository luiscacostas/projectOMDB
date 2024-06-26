require("dotenv").config();
const apiKey = process.env.USER_KEY;

const getHome = (req, res) => {
    res.status(200).render("home.pug", { msj: "Buscador de películas" });
};

const getFilm = async (req, res) => {
    const title  = req.params.title;
    console.log('******');
    console.log(req.params.title)
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        const data = await response.json();
        if (data.Response === "True") {
            res.status(200).render("film.pug", { film: data });
        } else {
            res.status(404).render("film.pug", { film: null, error: "Película no encontrada" });
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(500).json({ msj: `ERROR: ${error.stack}` });
    }
};

const postFilm = async (req, res) => {
    const {title} = req.body;
    if(title){
        res.redirect(`/film/${title}`)
    }else{
        res.status(404).render("film.pug", { film: null, error: "Película no encontrada" });
    }
    
}

module.exports = {
    getHome,
    getFilm,
    postFilm
};