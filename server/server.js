require('dotenv').config();
const express = require("express");
var cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4000;

const jwtMiddleware = require("./lib/jwtMiddleware");
const mongoose = require("mongoose");
// req.body가 undefined 이기때문에 바디파서 해줘야한다.
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// 아래와 같이 한번에 할 수 있다.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(jwtMiddleware);

mongoose
.connect(process.env.MONGO_URI, {
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
