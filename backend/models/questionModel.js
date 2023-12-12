import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    questions: { type: Array, default: [] },
    answers: { type: Array, default: [] },
  },
  { timestamps: true }
);

// Question Model
const Question = mongoose.model('Question', questionSchema);
export default Question;
