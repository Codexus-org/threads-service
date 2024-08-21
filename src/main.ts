import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Test Service Threads")
})

app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`)})