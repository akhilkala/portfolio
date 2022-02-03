import mongoose, { Document } from "mongoose";

export interface ISubmission extends Document {
  name: string;
  email: string;
  message: string;
}

const submissionSchema = new mongoose.Schema<ISubmission>(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Submission ||
  mongoose.model<ISubmission>("Submission", submissionSchema);
