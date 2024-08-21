import { model, Schema } from "mongoose";

export const ThreadSchema = new Schema({
  title: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
})

export const Thread = model("Thread", ThreadSchema)