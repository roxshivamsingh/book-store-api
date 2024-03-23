import { Router } from "express";
import UserRoutes from "./user.route.js";
import BookRoutes from "./book.route.js";
import PurchaseLogs from "./purchase-log.route.js";

const router = Router();

router.use("/api/users", UserRoutes);
router.use("/api/books", BookRoutes);
router.use("/api/purchase/logs", PurchaseLogs);
export default router;
