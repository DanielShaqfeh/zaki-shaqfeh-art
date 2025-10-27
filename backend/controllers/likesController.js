import { pool } from "../config/db.js";

export const likePainting = async (req, res) => {
  const { userId, paintingId } = req.body;

  try {
    const existing = await pool.query(
      "SELECT * FROM likes WHERE user_id=$1 AND painting_id=$2",
      [userId, paintingId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        "DELETE FROM likes WHERE user_id=$1 AND painting_id=$2",
        [userId, paintingId]
      );
      return res.json({ message: "Painting unliked" });
    }

    await pool.query(
      "INSERT INTO likes (user_id, painting_id) VALUES ($1, $2)",
      [userId, paintingId]
    );
    res.json({ message: "Painting liked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
