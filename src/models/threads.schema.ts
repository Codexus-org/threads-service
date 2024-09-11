import { model, Schema } from "mongoose";

export const ThreadSchema = new Schema({
  title: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String },
  userName: { type: String },
})

export const Thread = model("Thread", ThreadSchema)