import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const varifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("bearer ", "")

        if (!token) {
            throw new ApiError(401, "unauthorized token")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = User.findById(decodedToken?._id).select("-password -refrashTokan")

        if (!user) {
            throw new ApiError(401, "invalid access token ")
        }

        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || " invalid access token  ")
    }
})