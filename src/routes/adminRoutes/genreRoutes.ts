import express from 'express'
import { deleteGenres, getGenres, getGenreDetail, postGenres, putGenres } from '../../controllers/genreController'
import { validateRequest } from '../../middlewares/validateRequest'
import { genreSchema } from '../../utils/zodSchema'

const genreRoutes = express.Router()

genreRoutes.get('/genres', getGenres)
genreRoutes.get('/genres/:id', getGenreDetail)
genreRoutes.post('/genres', validateRequest(genreSchema), postGenres)
genreRoutes.put('/genres/:id', validateRequest(genreSchema), putGenres)
genreRoutes.delete('/genres/:id', deleteGenres)

export default genreRoutes