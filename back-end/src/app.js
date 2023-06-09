import express from "express";
import dotenv from "dotenv";
import apiRouter from './routes/index.js';

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT ?? "5001");

app.get("/", (req, res) => {
  res.send("this is my server");
});

app.listen(port, () => {
  console.log(`🚀 서버가 포트 ${port}에서 운영중입니다.`);
});