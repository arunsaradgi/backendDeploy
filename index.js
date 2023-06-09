const express = require("express");
const { connectDB } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

connectDB().then(() => {
  app.listen(process.env.port, async () => {
    try {
      console.log("connected to DB");
      console.log(`server running in ${process.env.port}`);
    } catch (error) {
      console.log(error);
      console.log("something went wrong!!");
    }
  });
});
