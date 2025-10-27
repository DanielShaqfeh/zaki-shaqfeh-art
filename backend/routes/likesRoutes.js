import express from "express";
import { likePainting } from "../controllers/likesController.js";

const router = express.Router();
router.post("/", likePainting);

export default router;
