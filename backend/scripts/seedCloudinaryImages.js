import { getAllCloudinaryImages } from "../utils/fetchCloudinaryImages.js";
import { insertImagesToDB } from "../utils/insertImagesToDB.js";

const seed = async () => {
  const urls = await getAllCloudinaryImages();
  if (urls.length > 0) {
    await insertImagesToDB(urls);
  } else {
    console.log("No images found in Cloudinary.");
  }
  process.exit();
};

seed();
