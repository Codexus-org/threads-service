import { model, Schema } from "mongoose";

export const ThreadSchema = new Schema({
  title: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
  authorId: { type: Schema.Types.ObjectId, ref: "User" },
})

export const Thread = model("Thread", ThreadSchema)