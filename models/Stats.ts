import mongoose, { Document } from "mongoose";

export interface IStat extends Document {
  clicks: {
    landing: {
      resume: number;
      myWork: number;
      projects: number;
      skills: number;
      about: number;
      contact: number;
      github: number;
      linkedin: number;
      medium: number;
    };
    projects: {};
    contact: {
      github: number;
      linkedin: number;
      medium: number;
    };
  };
}

const statsSchema = new mongoose.Schema<IStat>({
  _id: {
    type: String,
    default: "ID",
  },
  clicks: {
    landing: {
      resume: {
        type: Number,
        default: 0,
      },
      myWork: {
        type: Number,
        default: 0,
      },
      projects: {
        type: Number,
        default: 0,
      },
      skills: {
        type: Number,
        default: 0,
      },
      about: {
        type: Number,
        default: 0,
      },
      contact: {
        type: Number,
        default: 0,
      },
      github: {
        type: Number,
        default: 0,
      },
      linkedin: {
        type: Number,
        default: 0,
      },
      medium: {
        type: Number,
        default: 0,
      },
    },
    projects: {},
    contact: {
      github: {
        type: Number,
        default: 0,
      },
      linkedin: {
        type: Number,
        default: 0,
      },
      medium: {
        type: Number,
        default: 0,
      },
    },
  },
});

export default mongoose.models.Stat ||
  mongoose.model<IStat>("Stat", statsSchema);
