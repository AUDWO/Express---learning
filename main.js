const express = require("express");
const app = express();

//app.use는 미들웨어를 등록할 수 있게 해주는 메소드이다.

//express.json은 요청의 Content-Type이 application/json인 경우 req.body를 통해 접근할 수 있게 해주는 미들웨어이다.

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {});
