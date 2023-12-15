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
userRouter.post('/sign-up', createAccount);
userRouter.post('/login', loginUser);
userRouter.get('/logout', userLogout);
userRouter.put('/update', updateUserProfile);
userRouter.put('/change-password', changeUserPassword);
userRouter.delete('/delete', deleteAccount);

export default userRouter;
