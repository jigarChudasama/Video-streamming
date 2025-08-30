import { ApiError } from "./ApiError";
import { uploadOnCloudinary } from "./cloudinary";


const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;
    const result = await uploadOnCloudinary.uploader.destroy(publicId);
    return result; // { result: 'ok' }
  } catch (error) {
    throw new ApiError(401 , error?.message || "Error  while deleting an image ")
    return null;
  }
};

export {deleteFromCloudinary}