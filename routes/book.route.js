import { Router } from "express";
import {
  createBook,
  fetchBooks,
  showBook,
  deleteBook,
  searchBook,
} from "../Controller/book.controller.js";

const router = Router();

router.get("/", fetchBooks);
router.get("/search", searchBook);
router.get("/:id", showBook);
router.post("/", createBook);
// router.put("/:id", updateUser);
router.delete("/:id", deleteBook);

export default router;
