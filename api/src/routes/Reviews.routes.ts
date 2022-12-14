import { Router } from "express";
import {
  getReviews,
  createReviews,
  updateReviews,
  getReview,
  deleteReview,
} from "../controllers/reviews";

const router = Router();

// Routes
router.post("/", createReviews);
router.get("/", getReviews);
router.put("/:id", updateReviews);
router.delete("/:id", deleteReview);
router.get("/:id", getReview);


export default router;
