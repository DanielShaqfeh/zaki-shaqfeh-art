import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import paintingRoutes from "./routes/paintingRoutes.js";
import likesRoutes from "./routes/likesRoutes.js";
import "./config/db.js";  // DB connection

dotenv.config();
const app = express();

app.use(cors({
  origin: "https://zaki-shaqfeh-art.vercel.app", // frontend
  credentials: true,              
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/paintings", paintingRoutes);
app.use("/api/likes", likesRoutes);

app.get("/", (req, res) => {
  res.send("Zaki Shaqfeh Art Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
