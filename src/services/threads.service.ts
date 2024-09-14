import { IThread, IUpdateThread } from "../interfaces/threads.interface";
import ThreadRepositories from "../repositories/threads.repositories";
import jwt from "jsonwebtoken";

const ThreadServices = {

  getAllThreads: async () => {
    try {
      const threads = await ThreadRepositories.getAllThreads();
      
      if (threads.length === 0) {
        throw new Error("No threads found");
      }

      return threads;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getThreadById: async (threadId: string) => {
    try {
      const thread = await ThreadRepositories.getThreadById(threadId);

      if (!thread) {
        throw new Error("Thread not found");
      }

      return thread;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  createThread: async (threadData : IThread, accessToken: string) => {
    try {
      const { title, body, userId } = threadData;
      const payload = jwt.decode(accessToken) as { id: string, name: string, email: string };
      // console.log(payload.name)
      const userName = payload.name

      if (!title || !body) {
        throw new Error("title and body are required");
      }

      const newThread = await ThreadRepositories.createThread({ title, body, userId, userName});

      return newThread;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  updateThread: async (threadId: string, threadData: IUpdateThread) => {
    try {
      const thread = await ThreadRepositories.getThreadById(threadId);
      if (!thread) {
        throw new Error("Thread not found");
      }

      const { title, body } = threadData;
      if (!title || !body) {
        throw new Error("title and body are required");
      }

      const updateThread = await ThreadRepositories.updateThread(threadId, threadData);
      return updateThread;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteThread: async (threadId: string) => {
    try {
      const thread = await ThreadRepositories.getThreadById(threadId);
      if (!thread) {
        throw new Error("Thread not found");
      }

      await ThreadRepositories.deleteThread(threadId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default ThreadServices;