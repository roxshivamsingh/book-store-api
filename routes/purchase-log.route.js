import { Router } from "express";
import {
  createPurchaseLog,
  fetchPurchaseLogs,
  showPurchaseLog,
} from "../Controller/purchase-log.controller.js";

const router = Router();

router.get("/", fetchPurchaseLogs);
router.get("/:id", showPurchaseLog);
router.post("/", createPurchaseLog);

export default router;
