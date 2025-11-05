import { pool } from "../config/db.js";

export const insertImagesToDB = async (urls) => {
  try {
    for (const url of urls) {
      const existing = await pool.query(
        "SELECT id FROM paintings WHERE image_url = $1",
        [url]
      );

      if (existing.rows.length === 0) {
        await pool.query(
          "INSERT INTO paintings (image_url, created_at) VALUES ($1, NOW())",
          [url]
        );
      }
    }
    console.log("All images inserted into the paintings table!");
  } catch (err) {
    console.error("Error inserting images into DB:", err);
  }
};
