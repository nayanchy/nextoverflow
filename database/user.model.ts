import { model, models, Schema, Document } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  image?: string;
  bio?: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}

export interface IUserDoc extends IUser, Document {}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    bio: { type: String },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
