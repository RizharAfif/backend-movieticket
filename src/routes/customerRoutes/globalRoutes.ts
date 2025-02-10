import express from "express";
import {
  getAvailablSeats,
  getGlobalGenre,
  getGlobalMovieDetail,
  getGlobalMovies,
  getMoviesFilter,
} from "../../controllers/globalController";
import { validateRequest } from "../../middlewares/validateRequest";
import { transactionSchema } from "../../utils/zodSchema";
import { getOrderDetails, getOrders, transactionTicket } from "../../controllers/ticketController";

const globalRoutes = express.Router();

globalRoutes.get("/movies", getGlobalMovies);
globalRoutes.get("/genres", getGlobalGenre);
globalRoutes.get("/movies/:id", getGlobalMovieDetail);
globalRoutes.get("/check-seats/:movieId", getAvailablSeats);
globalRoutes.get("/browse-movies/:genreId", getMoviesFilter);
globalRoutes.post(
	"/transaction/buy",
	validateRequest(transactionSchema),
	transactionTicket,
);
globalRoutes.get("/orders", getOrders)
globalRoutes.get("/orders/:id", getOrderDetails)

export default globalRoutes;
