import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import { validateEnv } from "./validateEnv";

config();
validateEnv();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(json());

export { app };
