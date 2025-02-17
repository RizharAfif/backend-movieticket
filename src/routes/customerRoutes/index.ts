import express from "express";
import globalRoutes from "./globalRoutes";
import { verifyRole, verifyToken } from "../../middlewares/verifyToken";
import walletRoutes from "./walletRoutes";
import { getTheaters } from "../../controllers/theaterController";

const custGlobalRoutes = express.Router();

custGlobalRoutes.use(verifyToken);
custGlobalRoutes.use(verifyRole("customer"));

custGlobalRoutes.use(globalRoutes);
custGlobalRoutes.use(walletRoutes);
custGlobalRoutes.get("/theaters", getTheaters);

export default custGlobalRoutes;
