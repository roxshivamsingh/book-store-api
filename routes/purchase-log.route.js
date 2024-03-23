import { Router } from "express";
import {
  createPurchaseLog,
  fetchPurchaseLog,
  showPurchaseLog,
} from "../Controller/purchase-log.controller.js";

const router = Router();

router.get("/", fetchPurchaseLog);
router.get("/:id", showPurchaseLog);
router.post("/", createPurchaseLog);

export default router;
