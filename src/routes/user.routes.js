import { Router } from "express";
import { ChnagePassword, getCurrntUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateCoverImage, updateUserAvatar, updateUserDetail } from "../controllers/user.controller.js";
import { upload } from '../middlewares/multer.middleware.js'
import { varifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route('/register').post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route('/login').post( loginUser )

router.route('/logout').post( varifyJWT , logoutUser)

router.route('/refesh-token').post(refreshAccessToken)

router.route('/Chnage-password').post(varifyJWT , ChnagePassword)

router.route('/current-user').get(varifyJWT , getCurrntUser)

router.route('/update-account').patch(varifyJWT , updateUserDetail)

router.route('/avatar').patch(varifyJWT , upload.single("avatar") , updateUserAvatar)

router.route('/coverImage').patch(varifyJWT , upload.single("coverImage") , updateCoverImage)

router.route('/c/:username').get(varifyJWT , getUserChannelProfile)

router.route('/watch-history').get(varifyJWT , getWatchHistory )

export default router   