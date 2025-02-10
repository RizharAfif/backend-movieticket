import  express from 'express';
import { getAvailablSeats, getGlobalGenre, getGlobalMovieDetail, getGlobalMovies, getMoviesFilter } from '../../controllers/globalController';

const globalRoutes = express.Router();

globalRoutes.get('/movies', getGlobalMovies)
globalRoutes.get('/genres', getGlobalGenre)
globalRoutes.get('/movies/:id', getGlobalMovieDetail)
globalRoutes.get('/check-seats/:movieId', getAvailablSeats)
globalRoutes.get('/browse-movies/:genreId', getMoviesFilter)

export default globalRoutes;