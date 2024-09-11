import { Thread } from "../models/threads.schema";
import { IThread, IUpdateThread } from "../interfaces/threads.interface";

const ThreadRepositories = {

  getAllThreads: async () => {
    try {
      const threads = await Thread.find();
      return threads;
    } catch (error) {
      throw error;
    }
  },

  getThreadById: async (threadId: string) => {
    try {
      const thread = await Thread.findById(threadId);
      return thread;
    } catch (error) {
      throw error;
    }
  },

  createThread: async (threadData: IThread) => {
    try {
      const newThread = new Thread(threadData);
      const saveThread = await newThread.save();
      return saveThread;
    } catch (error) {
      throw error
    }
  },

  updateThread: async (threadId: string, threadData: IUpdateThread) => {
    try {
      const { title, body } = threadData;
      const updateThread = await Thread.findByIdAndUpdate(
        {_id: threadId}, 
        {title, body}, 
        { new: true }
      );

      return updateThread;
    } catch (error) {
      throw error;
    }
  },

  deleteThread: async (threadId: string) => {
    try {
      await Thread.findByIdAndDelete(threadId);
    } catch (error) {
      throw error;
    }
  }
}

export default ThreadRepositories;