// import { Schema, model } from "mongoose";

import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  age: number;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

export const UserModel = model<IUser>("User", UserSchema);
