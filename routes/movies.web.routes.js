const moviesWebController = require('../controllers/movies.web.controller');
const router = require('express').Router();

router.get("/", moviesWebController.getHome);
router.post("/film", moviesWebController.getFilm);

module.exports = router;