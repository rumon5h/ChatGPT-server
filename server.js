import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const openAI = new OpenAIApi(configuration);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Hello, World!",
  });
});
