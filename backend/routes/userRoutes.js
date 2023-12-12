import express from 'express';
import {
  changeUserPassword,
  createAccount,
  deleteAccount,
  loginUser,
  updateUserProfile,
  userLogout,
} from '../controllers/userController.js';

const userRouter = express.Router();

// Routes
userRouter.post('/', createAccount);
userRouter.get('/', loginUser);
userRouter.get('/', userLogout);
userRouter.put('/', updateUserProfile);
userRouter.put('/', changeUserPassword);
userRouter.delete('/', deleteAccount);

export default userRouter;
