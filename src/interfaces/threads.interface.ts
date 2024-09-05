import { Types } from "mongoose";

export interface IThread {
  title: string;
  body: string;
  authorId: Types.ObjectId;
}

export interface IUpdateThread {
  title: string;
  body: string;
}