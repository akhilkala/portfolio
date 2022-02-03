import mongoose, { Document } from "mongoose";

export interface IError extends Document {
  time: Date;
  endpont: string;
}

const errorsSchema = new mongoose.Schema<IError>({
  time: {
    type: Date,
    default: Date.now,
  },
  endpont: String,
});

export default mongoose.models.Error ||
  mongoose.model<IError>("Error", errorsSchema);
