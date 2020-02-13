require('dotenv').config();
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const multer  = require('multer');

const app = express();
const port = process.env.PORT || 4000;

const jwtMiddleware = require("./lib/jwtMiddleware");
//node 파일 업로드 
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null,` ${new Date().valueOf()}_${file.originalname}`);
    }
  }),
});



const mongoose = require("mongoose");
// req.body가 undefined 이기때문에 바디파서 해줘야한다.
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// 아래와 같이 한번에 할 수 있다.
app.use(express.urlencoded({limit: '50mb', extended: true }));//
app.use(express.json({limit: '50mb'})); //request entity too large 오류시
app.use(cookieParser());
app.use(jwtMiddleware);
//정적 폴더 
app.use('/upload',express.static('public/uploads'));

mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(() => console.log("Connected to MongoDB"))
.catch(e => console.log(e));

const api = require("./api");

app.post('/uploads', upload.single('img'), (req, res) => {
  console.log(req.file);
  console.log(req.file.filename);
 // console.log(req.body);
 return res.status(200).json({name: req.file.filename});
})

app.use("/api", api);


app.listen(port, () => {
  console.log(`server is litening at localhost${port}`);
});
