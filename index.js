const express = require("express");
const app = express();
const port = 5000;

const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://tkdqja4164:t1k2d301@fullstack.8t9cn.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("몽고디비 연결됨"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
