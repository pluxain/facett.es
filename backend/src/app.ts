import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(json());

export { app };
