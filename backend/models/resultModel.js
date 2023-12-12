import mongoose from 'mongoose';

const { Schema } = mongoose;

const resultSchema = new Schema(
  {
    username: { type: String },
    result: { type: Array, default: [] },
    attempts: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    achived: { type: String, default: '' },
  },
  { timestamps: true }
);

// Result Model
const Result = mongoose.model('Result', resultSchema);
export default Result;
