import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'

// =================== Generate Tokens ===================
const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new ApiError(404, "User not found while generating tokens")
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        console.error("Token generation error:", error)
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}


// =================== Register User ===================
const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, username, password } = req.body;

    if ([username, email, fullname, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    // avatar mandatory
    const localAvatarPath = req.files?.avatar?.[0]?.path;
    let localCoverImagePath;

    if (req.files?.coverImage?.length > 0) {
        localCoverImagePath = req.files.coverImage[0].path;
    }

    if (!localAvatarPath) {
        throw new ApiError(400, "User avatar image is required");
    }

    const avatar = await uploadOnCloudinary(localAvatarPath);
    if (!avatar) {
        throw new ApiError(400, "Avatar upload failed");
    }

    let coverImage = null;
    if (localCoverImagePath) {
        coverImage = await uploadOnCloudinary(localCoverImagePath);
    }

    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    );
});


// =================== Login User ===================
const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (!username && !email) {
        throw new ApiError(400, "Username or email is required")
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isvalidPassword = await user.isPasswordCorrect(password);
    if (!isvalidPassword) {
        throw new ApiError(401, "Password is incorrect")
    }

    const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                { loggedInUser, accessToken, refreshToken },
                "User logged in successfully"
            )
        );
});


// =================== Logout User ===================
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        { $unset: { refreshToken: 1 } },
        { new: true }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logout successfully"))
})

// =================== Logout User ===================
const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingToken = req.cookie.refreshToken || req.body.refreshToken

    if (!incomingToken) {
        throw new ApiError(401, "unauthorized token")
    }


    try {
        const decodedToken = jwt.verify(
            incomingToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, " invalid refresh token")
        }
    
        if (incomingToken !== user?.refreshToken) {
            throw new ApiError(401, "refesh token in expired or used")
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken , newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    accessToken,
                    refreshToken : newRefreshToken
                },
                "access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(
            501,
            error?.message || "error while refreshing access token "
        )
    }

})

// =================== Exports ===================
export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken
};
