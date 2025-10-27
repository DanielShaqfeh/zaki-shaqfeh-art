import express from "express";
import { getMostLikedPaintings, getUserLikedPaintings } from "../controllers/paintingsController.js";

const router = express.Router();

router.get("/most-liked", getMostLikedPaintings);
router.get("/user/:userId", getUserLikedPaintings);

export default router;
