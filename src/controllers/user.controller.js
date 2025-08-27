import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    // get data from frontend 
    // check wather data in not empty
    // check if user is already exist  , username & email
    // check for image , avarat 
    // upload to coudinary 
    // create an user object 
    // enter it to database 
    // remove password and refresh token 
    // check for user creation 
    // return res

    const { fullname, email, username, password } = req.body
    console.log(" req.body -----------------------> ", req.body)

    if (
        [username, email, fullname, password].some((fileds) => fileds?.trim() === "")
    ) {
        throw new ApiError(400, "all data need to be inserted")
    }

    const exsistingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (exsistingUser) {
        throw new ApiError(409, 'user is already exists')
    }

    const localavatarPath = req.files?.avatar[0]?.path
    const localcoverImagePath = req.files?.coverImage[0]?.path

    if (!localavatarPath) {
        throw new ApiError(400, "user avatar image in required")
    }

    const avatar = await uploadOnCloudinary(localavatarPath)
    const coverImage = await uploadOnCloudinary(localcoverImagePath)

    if (!avatar) {
        throw new ApiError(400, "user avatar image in required")
    }


    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage.url || ""
    })


    const createdUser = await User.findById(user._id).select(
        "-password -refrashTokan"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            createdUser,
            "user register successfuly"
        )
    )

})

export { registerUser }