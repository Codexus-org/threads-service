import ThreadServices from "../services/threads.service";

const ThreadControllers = {
  handleGetAllThreads: async (req: any, res: any) => {
    try {
      const threads = await ThreadServices.getAllThreads();

      res.status(200).json({ message: "Success get all threads" ,data: threads });
    } catch (error: any) {
      if (error.message === "No threads found") {
        res.status(404).json({ message: error.message });
      }
    }
  },

  handleGetThreadById: async (req: any, res: any) => {
    try {
      const thread = await ThreadServices.getThreadById(req.params.threadId);

      res.status(200).json({ message: "Success get thread by id", data: thread });
    } catch (error: any) {
      if (error.message === "Thread not found") {
        res.status(404).json({ message: error.message });
      }
    }
  },

  handleCreateThread: async (req: any, res: any) => {
    try {
      const { title, body } = req.body;
      const { id } = req.body.authUser;
      const newThread = await ThreadServices.createThread({ title, body, authorId: id });
      res.status(201).json({ message: "Success create new thread", data: newThread });
    } catch (error: any) {
      if (error.message === "title and body are required") {
        res.status(400).json({ message: error.message });
      }
    }
  },

  handleUpdateThread: async (req: any, res: any) => {
    try {
      const threadId = req.params.threadId;
      const { title, body } = req.body;

      const updateThread = await ThreadServices.updateThread(threadId, { title, body });
      res.status(200).json({ message: "Success update thread", data: updateThread });
    } catch (error: any) {
      if (error.message === "Thread not found") {
        res.status(404).json({ message: error.message });
      }

      if (error.message === "title and body are required") {
        res.status(400).json({ message: error.message });
      }
    }
  },

  handleDeleteThread: async (req: any, res: any) => {
    try {
      await ThreadServices.deleteThread(req.params.threadId);
      res.status(200).json({ message: "Success delete thread" });
    } catch (error: any) {
      if (error.message === "Thread not found") {
        res.status(404).json({ message: error.message });
      }
    }
  }
}

export default ThreadControllers;