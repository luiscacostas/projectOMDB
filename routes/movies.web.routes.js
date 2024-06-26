const moviesWebController = require('../controllers/movies.web.controller');
const router = require('express').Router();

router.get("/", moviesWebController.getHome);
router.get("/film/:title", moviesWebController.getFilm);
router.post("/film", moviesWebController.postFilm);
module.exports = router;