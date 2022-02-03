import mongoose, { Document } from "mongoose";

export interface IVisit extends Document {}

const visitsSchema = new mongoose.Schema<IVisit>({}, { timestamps: true });

export default mongoose.models.Visit ||
  mongoose.model<IVisit>("Visit", visitsSchema);
