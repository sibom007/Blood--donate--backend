import express from 'express';
import { AuthControllers } from './auth.contorler';


const router = express.Router();

router.post("/login", AuthControllers.LoginUser);

router.post(
    '/refresh-token',
    AuthControllers.refreshToken
)

router.post(
    '/change-password',
    AuthControllers.changepassword
)

export const AuthRoutes = router;
