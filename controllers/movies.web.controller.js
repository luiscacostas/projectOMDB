require("dotenv").config();
const apiKey = process.env.USER_KEY;

const getHome = (req, res) => {
    res.status(200).render("home.pug", { msj: "Buscador de películas" });
};

const getFilm = async (req, res) => {
    const { title } = req.body;
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

module.exports = {
    getHome,
    getFilm
};