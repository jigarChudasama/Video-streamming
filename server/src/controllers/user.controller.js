import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'
import { deleteFromCloudinary } from "../utils/OldImageDelete.js";
import mongoose from "mongoose";

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

  // ✅ Correct way
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

  return res.status(201).json(
    new ApiResponse(
      200,
      {
        user: createdUser,
      },
      "User registered successfully"
    )
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

        const { accessToken, newRefreshToken } = await generateAccessAndRefereshTokens(user._id)

        res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        accessToken,
                        refreshToken: newRefreshToken
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

// =================== change password  ===================

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    // Get logged-in user
    const user = await User.findById(req.user._id);
    // console.log(user)
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Compare old password
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid old password");
    }

    // Update password
    user.password = newPassword;
    await user.save({ validateBeforeSave: true });

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Password changed successfully"
        )
    );
});

// =================== get currnt user ===================
const getCurrntUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(200, req.user, "Current data fetch successfully")
        )
})

// =================== update user  ===================
const updateUserDetail = asyncHandler(async (req, res) => {
    const { fullname, email , username } = req.body

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                fullname: fullname,
                email: email,
                username : username
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user
                },
                "user detail updeted successfully"
            )
        )

})

// ================== change avatar  ===================
const updateUserAvatar = asyncHandler(async (req, res) => {
    const localAvatarPath = req.file?.path

    if (!localAvatarPath) {
        throw new ApiError(400, "avatar file path not recognized")
    }

    const avatar = await uploadOnCloudinary(localAvatarPath)

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading an avatar")
    }

    const OldUser = await User.findById(req.user._id);

    // Delete old avatar from cloudinary if exists
    if (OldUser?.avatar?.public_id) {
        await deleteFromCloudinary(OldUser.avatar.public_id);
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,

        {
            $set: {
                avatar: avatar.url
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "User avatar updeted successfully"
            )
        )
})

// =================== change coverImage  ===================
const updateCoverImage = asyncHandler(async (req, res) => {

    const localCoverImagePath = req.file?.path

    if (!localCoverImagePath) {
        throw new ApiError(401, "cover image file path not recognized")
    }

    const coverImage = await uploadOnCloudinary(localCoverImagePath)

    if (!coverImage) {
        throw new ApiError(401, "Error while uploading an cover image ")
    }

    const OldUser = await User.findById(req.user._id);

    if (OldUser?.coverImage?.public_id) {
        await deleteFromCloudinary(OldUser.coverImage.public_id);
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                coverImage: coverImage.url
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "cover Image updated usccessfully "
            )
        )

})

// =================== get user full profile using an aggregate pipeline (mingoDB) ===================
const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params

    if (!username?.trim()) {
        throw new ApiError(400, "username is missing")
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] },
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullname: 1,
                username: 1,
                avatar: 1,
                coverImage: 1,
                email: 1,
                subscribersCount: 1,
                channelSubscribedToCount: 1,
                isSubscribed: 1
            }
        }
    ])

    if (!channel?.length) {
        throw new ApiError(404, "channel dose not exsist")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, channel[0], "user channel fetch successfully")
        )
})

// =================== get watch history using an aggregate pipeline (mingoDB) ===================

const getWatchHistory = asyncHandler(async (req, res) => {
    const user = User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullname: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user[0].watchHistory,
                "watch history fetach successfully "
            )
        )

})

// =================== Exports ===================
export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changePassword,
    getCurrntUser,
    updateUserDetail,
    updateUserAvatar,
    updateCoverImage,
    getUserChannelProfile,
    getWatchHistory
};
