import express from 'express'
import { getCustomer, getTransaction, getWalletTransaction } from './../../controllers/customerController';

const customerRoutes = express.Router();

customerRoutes.get('/customers', getCustomer)
customerRoutes.get('/wallet-transaction', getWalletTransaction)
customerRoutes.get('/ticket-transaction', getTransaction)

export default customerRoutes;