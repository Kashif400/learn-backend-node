import { Router } from "express";
import {
    changeCurrentPassword,
    getCurrentChannelProfile,
    getCurrentUser,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} from "../controller/user.controller.js";
import {upload} from "../middlewares/multer.middlewares.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route('/register').post(
    upload.fields(
        [
            {
                name: "avatar",
                maxCount:1,
            },
            {
                name: 'coverImage',
                maxCount:1
            }
        ]
    ),
    
    registerUser);

// login user

router.route("/login").post(loginUser);

//logout user
// secured routes
router.route('/logout').post(verifyJWT, logoutUser);
router.route('/refresh-token').post(refreshAccessToken);

// change a password

router.route('/change-password').post(verifyJWT, changeCurrentPassword);

//get current user

router.route('/current-user').get(verifyJWT, getCurrentUser);

//update current account

router.route('/update-account').patch(verifyJWT, updateAccountDetails);

// update avatar image

router.route('/avatar').patch(verifyJWT, upload.single, updateUserAvatar);

// update coverImage
router.route('/coverImage').patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage);
    

router.route("/c/:username").get(verifyJWT, getCurrentChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)

export default router;
