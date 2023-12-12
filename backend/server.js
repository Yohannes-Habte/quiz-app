import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';

// Routes
import questionRouter from './routes/questionRoutes.js';
import resultRouter from './routes/resultRoutes.js';
import userRouter from './routes/userRoutes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';

// Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://quiz-app.vercel.app'],
    credentials: true, // to send token from the backend to the frontend
  })
);

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database successfully connected!'.blue.bold);
  } catch (error) {
    console.log(error);
  }
};

// morgan
app.use(morgan('tiny'));

// Endpoints
app.use('/api/users', userRouter);
app.use('/api/questions', questionRouter);
app.use('/api/results', resultRouter);

// Global error handler
app.use(globalErrorHandler);

// Server Listner
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(`The server starts http://localhost:${PORT}`.yellow.bold);
});
