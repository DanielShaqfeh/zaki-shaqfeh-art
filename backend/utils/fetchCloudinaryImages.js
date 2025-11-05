import cloudinary from "../config/cloudinary.js";

export const getAllCloudinaryImages = async () => {
  try {
    let allImages = [];
    let nextCursor = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        max_results: 100,
        next_cursor: nextCursor,
      });

      allImages.push(...result.resources.map(img => img.secure_url));
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return allImages;
  } catch (err) {
    console.error("Error fetching images from Cloudinary:", err);
    return [];
  }
};
