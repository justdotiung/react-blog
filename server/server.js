const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
// req.body가 undefined 이기때문에 바디파서 해줘야한다.
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// 아래와 같이 한번에 할 수 있다.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/blogTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(e => console.log(e));

const api = require("./api");

app.use("/api", api);

app.listen(port, () => {
  console.log(`server is litening at localhost${port}`);
});
