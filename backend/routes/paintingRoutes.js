import express from "express";
import { getMostLikedPaintings, getTopThreePaintings, getUserLikedPaintings } from "../controllers/paintingsController.js";

const router = express.Router();

router.get("/most-liked", getMostLikedPaintings);
router.get("/featured", getTopThreePaintings);
router.get("/user/:userId", getUserLikedPaintings);

export default router;
