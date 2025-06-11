import { model, models, Schema, Types } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  tags: Types.ObjectId[];
  author: Types.ObjectId;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
  downvotes: number;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    upvotes: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Question =
  models?.question || model<IQuestion>("Question", QuestionSchema);

export default Question;
