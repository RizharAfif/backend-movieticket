import { Router } from "express";
import { globalTopupBalance } from "../controllers/walletController";

const globalPayment = Router();

globalPayment.post(
  "/global-payment",
  //   validateRequest(topupSchema),
  globalTopupBalance
);

export default globalPayment;
