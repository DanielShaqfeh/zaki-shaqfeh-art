import { pool } from "../config/db.js";

// Get all paintings sorted by most liked
export const getMostLikedPaintings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT p.id, p.image_url, p.created_at, COUNT(l.id) AS likes
      FROM paintings p
      LEFT JOIN likes l ON p.id = l.painting_id
      GROUP BY p.id
      ORDER BY likes DESC, p.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get top 3 most liked paintings (Homepage)
export const getTopThreePaintings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id, 
        p.image_url, 
        p.created_at, 
        COUNT(l.id) AS likes
      FROM paintings p
      LEFT JOIN likes l ON p.id = l.painting_id
      GROUP BY p.id
      ORDER BY likes DESC, p.created_at DESC
      LIMIT 3
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get paintings liked by a specific user
export const getUserLikedPaintings = async (req, res) => {
  const userId = req.params.userId;
  try {
    const result = await pool.query(`
      SELECT p.id, p.image_url, p.created_at
      FROM paintings p
      JOIN likes l ON p.id = l.painting_id
      WHERE l.user_id = $1
      ORDER BY l.created_at DESC
    `, [userId]);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
