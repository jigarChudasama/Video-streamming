import { Router } from "express";
import { changePassword, getCurrntUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateCoverImage, updateUserAvatar, updateUserDetail } from "../controllers/user.controller.js";
import { upload } from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";
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

router.route('/logout').post( verifyJWT , logoutUser)

router.route('/refesh-token').post(refreshAccessToken)

router.route('/Chnage-password').post(verifyJWT , changePassword)

router.route('/current-user').get(verifyJWT , getCurrntUser)

router.route('/update-account').patch(verifyJWT , updateUserDetail)

router.route('/avatar').patch(verifyJWT , upload.single("avatar") , updateUserAvatar)

router.route('/coverImage').patch(verifyJWT , upload.single("coverImage") , updateCoverImage)

router.route('/c/:username').get(verifyJWT , getUserChannelProfile)

router.route('/watch-history').get(verifyJWT , getWatchHistory )

export default router   