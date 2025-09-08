import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "../utils/ApiError.js";

const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;

    const result = await cloudinary.uploader.destroy(publicId);
    return result; // { result: 'ok' } on success
  } catch (error) {
    throw new ApiError(500, error?.message || "Error while deleting file from Cloudinary");
  }
};

export { deleteFromCloudinary };